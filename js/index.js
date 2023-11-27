!(function () {
  function e(t, n, r) {
    function o(a, u) {
      if (!n[a]) {
        if (!t[a]) {
          var s = "function" == typeof require && require;
          if (!u && s) return s(a, !0);
          if (i) return i(a, !0);
          var l = new Error("Cannot find module '" + a + "'");
          throw ((l.code = "MODULE_NOT_FOUND"), l);
        }
        var c = (n[a] = {
          exports: {},
        });
        t[a][0].call(
          c.exports,
          function (e) {
            return o(t[a][1][e] || e);
          },
          c,
          c.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[a].exports;
    }
    for (
      var i = "function" == typeof require && require, a = 0;
      a < r.length;
      a++
    )
      o(r[a]);
    return o;
  }
  return e;
})()(
  {
    1: [
      function (e, t, n) {
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (d === setTimeout) return setTimeout(e, 0);
          if ((d === r || !d) && setTimeout)
            return (d = setTimeout), setTimeout(e, 0);
          try {
            return d(e, 0);
          } catch (t) {
            try {
              return d.call(null, e, 0);
            } catch (t) {
              return d.call(this, e, 0);
            }
          }
        }
        function a(e) {
          if (p === clearTimeout) return clearTimeout(e);
          if ((p === o || !p) && clearTimeout)
            return (p = clearTimeout), clearTimeout(e);
          try {
            return p(e);
          } catch (t) {
            try {
              return p.call(null, e);
            } catch (t) {
              return p.call(this, e);
            }
          }
        }
        function u() {
          h &&
            m &&
            ((h = !1),
            m.length ? (f = m.concat(f)) : (x = -1),
            f.length && s());
        }
        function s() {
          if (!h) {
            var e = i(u);
            h = !0;
            for (var t = f.length; t; ) {
              for (m = f, f = []; ++x < t; ) m && m[x].run();
              (x = -1), (t = f.length);
            }
            (m = null), (h = !1), a(e);
          }
        }
        function l(e, t) {
          (this.fun = e), (this.array = t);
        }
        function c() {}
        var d,
          p,
          v = (t.exports = {});
        !(function () {
          try {
            d = "function" == typeof setTimeout ? setTimeout : r;
          } catch (e) {
            d = r;
          }
          try {
            p = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (e) {
            p = o;
          }
        })();
        var m,
          f = [],
          h = !1,
          x = -1;
        (v.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          f.push(new l(e, t)), 1 !== f.length || h || i(s);
        }),
          (l.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (v.title = "browser"),
          (v.browser = !0),
          (v.env = {}),
          (v.argv = []),
          (v.version = ""),
          (v.versions = {}),
          (v.on = c),
          (v.addListener = c),
          (v.once = c),
          (v.off = c),
          (v.removeListener = c),
          (v.removeAllListeners = c),
          (v.emit = c),
          (v.prependListener = c),
          (v.prependOnceListener = c),
          (v.listeners = function (e) {
            return [];
          }),
          (v.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (v.cwd = function () {
            return "/";
          }),
          (v.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (v.umask = function () {
            return 0;
          });
      },
      {},
    ],
    2: [
      function (e, t, n) {
        function r(e, t, n, r) {
          if (((n = window.getComputedStyle), (r = n ? n(e) : e.currentStyle)))
            return r[
              t.replace(/-(\w)/gi, function (e, t) {
                return t.toUpperCase();
              })
            ];
        }
        t.exports = r;
      },
      {},
    ],
    3: [
      function (e, t, n) {
        !(function (e) {
          function n() {
            this._listeners = [];
          }
          function r(e) {
            e.sort(function (e, t) {
              return (e = e.p), (t = t.p), t < e ? 1 : e > t ? -1 : 0;
            });
          }
          function o(e, t, n, o) {
            if (!e) throw l;
            n = n || 0;
            for (var i, a, u, s = this._listeners, d = s.length; d--; )
              if (((i = s[d]), i.f === e && i.c === t)) return !1;
            "function" == typeof n && ((a = n), (n = o), (u = 4)),
              s.unshift({
                f: e,
                c: t,
                p: n,
                r: a || e,
                a: c.call(arguments, u || 3),
                j: 0,
              }),
              r(s);
          }
          function i(t, n, r, i) {
            if (!t) throw l;
            var a = this,
              u = function () {
                return a.remove.call(a, t, n), t.apply(n, c.call(arguments, 0));
              };
            (i = c.call(arguments, 0)),
              1 === i.length && i.push(e),
              i.splice(2, 0, u),
              o.apply(a, i);
          }
          function a(e, t) {
            if (!e) return (this._listeners.length = 0), !0;
            for (var n, r = this._listeners, o = r.length; o--; )
              if (((n = r[o]), n.f === e && (!t || n.c === t)))
                return (n.j = 1), r.splice(o, 1), !0;
            return !1;
          }
          function u(e) {
            e = c.call(arguments, 0);
            for (var t, n, r = this._listeners, o = r.length; o--; )
              if (
                (t = r[o]) &&
                !t.j &&
                ((t.j = 1), !1 === t.r.apply(t.c, t.a.concat(e)))
              ) {
                n = t;
                break;
              }
            for (r = this._listeners, o = r.length; o--; ) r[o].j = 0;
            return n;
          }
          var s = n.prototype;
          (s.add = o), (s.addOnce = i), (s.remove = a), (s.dispatch = u);
          var l = "Callback function is missing!",
            c = Array.prototype.slice;
          void 0 !== t && (t.exports = n);
        })();
      },
      {},
    ],
    4: [
      function (e, t, n) {
        function r(e, t, n) {
          if (null != e)
            for (
              var r = -1, o = e.length;
              ++r < o && !1 !== t.call(n, e[r], r, e);

            );
        }
        t.exports = r;
      },
      {},
    ],
    5: [
      function (e, t, n) {
        function r(e, t, n) {
          var r = e.length;
          (t = null == t ? 0 : t < 0 ? Math.max(r + t, 0) : Math.min(t, r)),
            (n = null == n ? r : n < 0 ? Math.max(r + n, 0) : Math.min(n, r));
          for (var o = []; t < n; ) o.push(e[t++]);
          return o;
        }
        t.exports = r;
      },
      {},
    ],
    6: [
      function (e, t, n) {
        function r(e) {
          switch (s(e)) {
            case "Object":
              return o(e);
            case "Array":
              return u(e);
            case "RegExp":
              return i(e);
            case "Date":
              return a(e);
            default:
              return e;
          }
        }
        function o(e) {
          return l(e) ? c({}, e) : e;
        }
        function i(e) {
          var t = "";
          return (
            (t += e.multiline ? "m" : ""),
            (t += e.global ? "g" : ""),
            (t += e.ignoreCase ? "i" : ""),
            new RegExp(e.source, t)
          );
        }
        function a(e) {
          return new Date(+e);
        }
        function u(e) {
          return e.slice();
        }
        var s = e(13),
          l = e(11),
          c = e(21);
        t.exports = r;
      },
      {
        11: 11,
        13: 13,
        21: 21,
      },
    ],
    7: [
      function (e, t, n) {
        function r(e, t) {
          switch (s(e)) {
            case "Object":
              return o(e, t);
            case "Array":
              return i(e, t);
            default:
              return a(e);
          }
        }
        function o(e, t) {
          if (l(e)) {
            var n = {};
            return (
              u(
                e,
                function (e, n) {
                  this[n] = r(e, t);
                },
                n
              ),
              n
            );
          }
          return t ? t(e) : e;
        }
        function i(e, t) {
          for (var n = [], o = -1, i = e.length; ++o < i; ) n[o] = r(e[o], t);
          return n;
        }
        var a = e(6),
          u = e(16),
          s = e(13),
          l = e(11);
        t.exports = r;
      },
      {
        11: 11,
        13: 13,
        16: 16,
        6: 6,
      },
    ],
    8: [
      function (e, t, n) {
        var r = e(9),
          o =
            Array.isArray ||
            function (e) {
              return r(e, "Array");
            };
        t.exports = o;
      },
      {
        9: 9,
      },
    ],
    9: [
      function (e, t, n) {
        function r(e, t) {
          return o(e) === t;
        }
        var o = e(13);
        t.exports = r;
      },
      {
        13: 13,
      },
    ],
    10: [
      function (e, t, n) {
        function r(e) {
          return o(e, "Object");
        }
        var o = e(9);
        t.exports = r;
      },
      {
        9: 9,
      },
    ],
    11: [
      function (e, t, n) {
        function r(e) {
          return !!e && "object" == typeof e && e.constructor === Object;
        }
        t.exports = r;
      },
      {},
    ],
    12: [
      function (e, t, n) {
        function r(e) {
          switch (typeof e) {
            case "string":
            case "number":
            case "boolean":
              return !0;
          }
          return null == e;
        }
        t.exports = r;
      },
      {},
    ],
    13: [
      function (e, t, n) {
        function r(e) {
          return null === e
            ? "Null"
            : e === o
            ? "Undefined"
            : i.exec(a.call(e))[1];
        }
        var o,
          i = /^\[object (.*)\]$/,
          a = Object.prototype.toString;
        t.exports = r;
      },
      {},
    ],
    14: [
      function (e, t, n) {
        function r(e, t) {
          return (
            o(i(arguments, 1), function (t) {
              a(t, function (t, n) {
                null == e[n] && (e[n] = t);
              });
            }),
            e
          );
        }
        var o = e(4),
          i = e(5),
          a = e(16);
        t.exports = r;
      },
      {
        16: 16,
        4: 4,
        5: 5,
      },
    ],
    15: [
      function (e, t, n) {
        function r() {
          (u = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ]),
            (a = !0);
          for (var e in {
            toString: null,
          })
            a = !1;
        }
        function o(e, t, n) {
          var o,
            l = 0;
          null == a && r();
          for (o in e) if (!1 === i(t, e, o, n)) break;
          if (a)
            for (
              var c = e.constructor, d = !!c && e === c.prototype;
              (o = u[l++]) &&
              (("constructor" === o && (d || !s(e, o))) ||
                e[o] === Object.prototype[o] ||
                !1 !== i(t, e, o, n));

            );
        }
        function i(e, t, n, r) {
          return e.call(r, t[n], n, t);
        }
        var a,
          u,
          s = e(18);
        t.exports = o;
      },
      {
        18: 18,
      },
    ],
    16: [
      function (e, t, n) {
        function r(e, t, n) {
          i(e, function (r, i) {
            if (o(e, i)) return t.call(n, e[i], i, e);
          });
        }
        var o = e(18),
          i = e(15);
        t.exports = r;
      },
      {
        15: 15,
        18: 18,
      },
    ],
    17: [
      function (e, t, n) {
        function r(e, t) {
          for (var n = t.split("."), r = n.pop(); (t = n.shift()); )
            if (null == (e = e[t])) return;
          return e[r];
        }
        e(12);
        t.exports = r;
      },
      {
        12: 12,
      },
    ],
    18: [
      function (e, t, n) {
        function r(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        t.exports = r;
      },
      {},
    ],
    19: [
      function (e, t, n) {
        var r = e(16),
          o =
            Object.keys ||
            function (e) {
              var t = [];
              return (
                r(e, function (e, n) {
                  t.push(n);
                }),
                t
              );
            };
        t.exports = o;
      },
      {
        16: 16,
      },
    ],
    20: [
      function (e, t, n) {
        function r() {
          var e,
            t,
            n,
            u,
            s = 1;
          for (u = i(arguments[0]); (n = arguments[s++]); )
            for (e in n)
              o(n, e) &&
                ((t = n[e]),
                a(t) && a(u[e]) ? (u[e] = r(u[e], t)) : (u[e] = i(t)));
          return u;
        }
        var o = e(18),
          i = e(7),
          a = e(10);
        t.exports = r;
      },
      {
        10: 10,
        18: 18,
        7: 7,
      },
    ],
    21: [
      function (e, t, n) {
        function r(e, t) {
          for (var n, r = 0, a = arguments.length; ++r < a; )
            null != (n = arguments[r]) && i(n, o, e);
          return e;
        }
        function o(e, t) {
          this[t] = e;
        }
        var i = e(16);
        t.exports = r;
      },
      {
        16: 16,
      },
    ],
    22: [
      function (e, t, n) {
        function r(e, t) {
          for (
            var n,
              r,
              u,
              s,
              l = (e || "").replace("?", "").split("&"),
              c = -1,
              d = {};
            (r = l[++c]);

          )
            (n = r.indexOf("=")),
              (s = r.substring(0, n)),
              (u = decodeURIComponent(r.substring(n + 1))),
              !1 !== t && (u = o(u)),
              a(d, s)
                ? i(d[s])
                  ? d[s].push(u)
                  : (d[s] = [d[s], u])
                : (d[s] = u);
          return d;
        }
        var o = e(25),
          i = e(8),
          a = e(18);
        t.exports = r;
      },
      {
        18: 18,
        25: 25,
        8: 8,
      },
    ],
    23: [
      function (e, t, n) {
        function r(e) {
          e = e.replace(/#.*/, "");
          var t = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(e);
          return t ? decodeURIComponent(t[0].replace(/\+/g, " ")) : "";
        }
        t.exports = r;
      },
      {},
    ],
    24: [
      function (e, t, n) {
        function r(e, t) {
          return o(i(e), t);
        }
        var o = e(22),
          i = e(23);
        t.exports = r;
      },
      {
        22: 22,
        23: 23,
      },
    ],
    25: [
      function (e, t, n) {
        function r(e) {
          return null === e || "null" === e
            ? null
            : "true" === e ||
                ("false" !== e &&
                  (e === o || "undefined" === e
                    ? o
                    : "" === e || isNaN(e)
                    ? e
                    : parseFloat(e)));
        }
        var o;
        t.exports = r;
      },
      {},
    ],
    26: [
      function (e, t, n) {
        (function (e) {
          (function () {
            var n, r, o;
            "undefined" != typeof performance &&
            null !== performance &&
            performance.now
              ? (t.exports = function () {
                  return performance.now();
                })
              : void 0 !== e && null !== e && e.hrtime
              ? ((t.exports = function () {
                  return (n() - o) / 1e6;
                }),
                (r = e.hrtime),
                (n = function () {
                  var e;
                  return (e = r()), 1e9 * e[0] + e[1];
                }),
                (o = n()))
              : Date.now
              ? ((t.exports = function () {
                  return Date.now() - o;
                }),
                (o = Date.now()))
              : ((t.exports = function () {
                  return new Date().getTime() - o;
                }),
                (o = new Date().getTime()));
          }).call(this);
        }).call(this, e(1));
      },
      {
        1: 1,
      },
    ],
    27: [
      function (e, t, n) {
        (t.exports = e(28)),
          e(34),
          e(33),
          e(35),
          e(31),
          e(36),
          e(30),
          e(32),
          e(37);
      },
      {
        28: 28,
        30: 30,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
      },
    ],
    28: [
      function (e, t, n) {
        function r() {
          (this.isLoading = !1),
            (this.totalWeight = 0),
            (this.loadedWeight = 0),
            (this.itemUrls = {}),
            (this.itemList = []),
            (this.loadingSignal = new T()),
            (this.crossOriginMap = {}),
            (this.queue = []),
            (this.activeItems = []),
            (this.maxActiveItems = 4);
        }
        function o(e, t) {
          this.crossOriginMap[e] = t;
        }
        function i(e, t) {
          var n,
            r,
            o,
            i,
            a,
            u = h(e, t);
          for (n = 0, o = u.length; n < o; n++)
            for (a = u[n], r = 0, i = a.items.length; r < i; r++)
              this.add(a.items[r], {
                type: a.type,
              });
          return u;
        }
        function a(e, t) {
          var n = E[e];
          return (
            n || (n = this._createItem(e, t && t.type ? t.type : x(e).type, t)),
            t && t.onLoad && n.onLoaded.addOnce(t.onLoad),
            this.itemUrls[e] ||
              ((this.itemUrls[e] = n),
              this.itemList.push(n),
              (this.totalWeight += n.weight)),
            n
          );
        }
        function u(e, t) {
          var n = E[e];
          return (
            n || (n = this._createItem(e, t && t.type ? t.type : x(e).type, t)),
            t && t.onLoad && n.onLoaded.addOnce(t.onLoad),
            R[e] ? n.dispatch() : n.isStartLoaded || n.load(),
            n
          );
        }
        function s(e) {
          e && this.loadingSignal.add(e), (this.isLoading = !0);
          var t = this.itemList.length;
          if (t) {
            for (
              var n, r = this.itemList.splice(0, this.itemList.length), o = 0;
              o < t;
              o++
            ) {
              n = r[o];
              var i = !!R[n.url];
              n.onLoaded.addOnce(p, this, -1024, n, r, i),
                n.hasLoading && n.loadingSignal.add(c, this, -1024, n, r, w),
                i ? n.dispatch(p) : n.isStartLoaded || this.queue.push(n);
            }
            this.queue.length && this.loadNext();
          } else p.call(this, w, this.itemList);
        }
        function l() {
          if (
            this.queue.length &&
            this.activeItems.length < this.maxActiveItems
          ) {
            var e = this.queue.shift();
            this.activeItems.push(e), this.loadNext(), e.load();
          }
        }
        function c(e, t, n, r, o) {
          (e && !e.isLoaded && 1 === r) ||
            (o === w &&
              ((this.loadedWeight = d(t)),
              (o = this.loadedWeight / this.totalWeight)),
            (n = n || this.loadingSignal),
            n.dispatch(o, e));
        }
        function d(e) {
          for (var t = 0, n = 0, r = e.length; n < r; n++)
            t += e[n].loadedWeight;
          return t;
        }
        function p(e, t, n) {
          if (((this.loadedWeight = d(t)), !n))
            for (var r = this.activeItems, o = r.length; o--; )
              if (r[o] === e) {
                r.splice(o, 1);
                break;
              }
          var i = this.loadingSignal;
          this.loadedWeight === this.totalWeight
            ? ((this.isLoading = !1),
              (this.loadedWeight = 0),
              (this.totalWeight = 0),
              (this.loadingSignal = new T()),
              this._onLoading(e, t, i, 1, 1),
              e && e.noCache && v(e))
            : (this._onLoading(
                e,
                t,
                i,
                1,
                this.loadedWeight / this.totalWeight
              ),
              e && e.noCache && v(e),
              n || this.loadNext());
        }
        function v(e) {
          var t = e.url;
          (e.content = w), (E[t] = w), (R[t] = w);
        }
        function m(e, t, n) {
          if (((n = n || {}), !n.crossOrigin))
            for (var r in this.crossOriginMap)
              if (0 === e.indexOf(r)) {
                n.crossOrigin = this.crossOriginMap[r];
                break;
              }
          return new A[t](e, n);
        }
        function f(e) {
          A[e.type] || (I.push(e), (A[e.type] = e));
        }
        function h(e, t) {
          var n,
            r,
            o = e.length,
            i = [];
          if (o && "string" != typeof e)
            for (n = 0; n < o; n++) (r = x(e[n], t)) && (i = i.concat(r));
          else (r = x(e, t)) && (i = i.concat(r));
          return i;
        }
        function x(e, t) {
          var n, r, o, i, a;
          if (t) (i = A[t]), (o = i.retrieve(e));
          else
            for (n = 0, r = I.length; n < r; n++) {
              if (((i = I[n]), (a = i.type), "string" == typeof e)) {
                if (g(e, i)) {
                  o = [e];
                  break;
                }
              } else if (
                (o = i.retrieve(e)) &&
                o.length &&
                "string" == typeof o[0] &&
                g(o[0], i)
              )
                break;
              (o = w), (a = w);
            }
          if (o)
            return {
              type: t || a,
              items: o,
            };
        }
        function g(e, t) {
          if (e) {
            for (var n = _(e), r = t.extensions, o = r.length; o--; )
              if (n === r[o]) return !0;
            return !1;
          }
        }
        function _(e) {
          return e.split(".").pop().split(/#|\?/)[0];
        }
        function y() {
          return new r();
        }
        function S() {
          var e = [],
            t = [];
          for (var n in E) e.push(n), R[n] || t.push(E[n]);
          console.log({
            added: e,
            notLoaded: t,
          });
        }
        var w,
          T = e(3),
          b = r.prototype;
        (b.addChunk = i),
          (b.setCrossOrigin = o),
          (b.add = a),
          (b.load = u),
          (b.start = s),
          (b.loadNext = l),
          (b._createItem = m),
          (b._onLoading = c);
        var M = (t.exports = y());
        (M.version = "0.1.9"),
          (M.register = f),
          (M.retrieveAll = h),
          (M.retrieve = x),
          (M.testExtensions = g),
          (M.create = y),
          (M.load = u),
          (M.check = S);
        var E = (M.addedItems = {}),
          R = (M.loadedItems = {}),
          I = (M.ITEM_CLASS_LIST = []),
          A = (M.ITEM_CLASSES = {});
      },
      {
        3: 3,
      },
    ],
    29: [
      function (e, t, n) {
        function r(e, t) {
          if (e) {
            (this.url = e), (this.loadedWeight = 0), (this.weight = 1);
            for (var n in t) this[n] = t[n];
            this.type || (this.type = this.constructor.type),
              this.hasLoading &&
                ((this.loadingSignal = new s()),
                this.loadingSignal.add(a, this),
                this.onLoading && this.loadingSignal.add(this.onLoading));
            var r = this;
            (this.boundOnLoad = function () {
              r._onLoad();
            }),
              (this.onLoaded = new s()),
              (l.addedItems[e] = this);
          }
        }
        function o() {
          this.isStartLoaded = !0;
        }
        function i() {
          (this.isLoaded = !0),
            (this.loadedWeight = this.weight),
            (l.loadedItems[this.url] = this),
            this.onLoaded.dispatch(this.content);
        }
        function a(e) {
          this.loadedWeight = this.weight * e;
        }
        function u() {
          this.hasLoading && this.loadingSignal.remove(),
            this.onLoaded.dispatch(this.content);
        }
        var s = e(3),
          l = e(28);
        t.exports = r;
        var c = r.prototype;
        (c.load = o),
          (c._onLoad = i),
          (c._onLoading = a),
          (c.dispatch = u),
          (r.extensions = []),
          (r.retrieve = function () {
            return !1;
          });
      },
      {
        28: 28,
        3: 3,
      },
    ],
    30: [
      function (e, t, n) {
        function r(e, t) {
          e &&
            (u.constructor.call(this, e, t),
            !this.loadFunc &&
              console &&
              console[console.error || console.log](
                "require loadFunc in the config object."
              ));
        }
        function o() {
          var e = this;
          this.loadFunc(
            this.url,
            function (t) {
              (e.content = t), u._onLoad.call(e);
            },
            this.loadingSignal
          );
        }
        var i = e(29),
          a = e(28);
        (t.exports = r),
          (r.type = "any"),
          (r.extensions = []),
          a.register(r),
          (r.retrieve = function () {
            return !1;
          });
        var u = i.prototype,
          s = (r.prototype = new i());
        (s.constructor = r), (s.load = o);
      },
      {
        28: 28,
        29: 29,
      },
    ],
    31: [
      function (e, t, n) {
        function r(e, t) {
          if (e) {
            (this.loadThrough = !t || t.loadThrough === a || t.loadThrough),
              l.constructor.apply(this, arguments);
            try {
              this.content = new Audio();
            } catch (e) {
              this.content = document.createElement("audio");
            }
            this.crossOrigin && (this.content.crossOrigin = this.crossOrigin);
          }
        }
        function o() {
          l.load.apply(this, arguments);
          var e = this,
            t = e.content;
          (t.src = this.url),
            this.loadThrough
              ? t.addEventListener("canplaythrough", this.boundOnLoad, !1)
              : t.addEventListener("canplay", this.boundOnLoad, !1),
            t.load();
        }
        function i() {
          this.content.removeEventListener(
            "canplaythrough",
            this.boundOnLoad,
            !1
          ),
            this.content.removeEventListener("canplay", this.boundOnLoad, !1),
            this.isLoaded || l._onLoad.call(this);
        }
        var a,
          u = e(29),
          s = e(28);
        (t.exports = r),
          (r.type = "audio"),
          (r.extensions = ["mp3", "ogg"]),
          s.register(r),
          (r.retrieve = function (e) {
            return !1;
          });
        var l = u.prototype,
          c = (r.prototype = new u());
        (c.constructor = r), (c.load = o), (c._onLoad = i);
      },
      {
        28: 28,
        29: 29,
      },
    ],
    32: [
      function (e, t, n) {
        function r(e, t) {
          e &&
            (c.constructor.apply(this, arguments),
            (this.content = new Image()),
            this.crossOrigin && (this.content.crossOrigin = this.crossOrigin));
        }
        function o() {
          c.load.apply(this, arguments);
          var e = this.content;
          (e.onload = this.boundOnLoad), (e.src = this.url);
        }
        function i() {
          delete this.content.onload,
            (this.width = this.content.width),
            (this.height = this.content.height),
            c._onLoad.call(this);
        }
        function a(e) {
          return 0 !== e.indexOf("data:");
        }
        var u = e(29),
          s = e(2),
          l = e(28);
        t.exports = r;
        var c = u.prototype,
          d = (r.prototype = new u());
        (d.constructor = r),
          (d.load = o),
          (d._onLoad = i),
          (r.retrieve = function (e) {
            if (e.nodeType && e.style) {
              var t = [];
              "img" === e.nodeName.toLowerCase() &&
                e.src.indexOf(";") < 0 &&
                t.push(e.src),
                s(e, "background-image").replace(
                  /s?url\(\s*?['"]?([^;]*?)['"]?\s*?\)/g,
                  function (e, n) {
                    t.push(n);
                  }
                );
              for (var n = t.length; n--; ) a(t[n]) || t.splice(n, 1);
              return !!t.length && t;
            }
            return "string" == typeof e && [e];
          }),
          (r.type = "image"),
          (r.extensions = ["jpg", "gif", "png"]),
          l.register(r);
      },
      {
        2: 2,
        28: 28,
        29: 29,
      },
    ],
    33: [
      function (require, module, exports) {
        function JSONItem(e) {
          e && _super.constructor.apply(this, arguments);
        }
        function _onLoad() {
          this.content ||
            (this.content =
              window.JSON && window.JSON.parse
                ? JSON.parse(this.xmlhttp.responseText.toString())
                : eval(this.xmlhttp.responseText.toString())),
            _super._onLoad.call(this);
        }
        var TextItem = require(35),
          quickLoader = require(28);
        (module.exports = JSONItem),
          (JSONItem.type = "json"),
          (JSONItem.extensions = ["json"]),
          quickLoader.register(JSONItem),
          (JSONItem.retrieve = function () {
            return !1;
          });
        var _super = TextItem.prototype,
          _p = (JSONItem.prototype = new TextItem());
        (_p.constructor = JSONItem), (_p._onLoad = _onLoad);
      },
      {
        28: 28,
        35: 35,
      },
    ],
    34: [
      function (e, t, n) {
        function r() {
          return "_jsonp" + new Date().getTime() + ~~(1e8 * Math.random());
        }
        function o(e) {
          e && s.constructor.apply(this, arguments);
        }
        function i(e) {
          s.load.apply(this, arguments);
          var t = this,
            n = this.url.lastIndexOf("=") + 1,
            o = this.url.substr(0, n),
            i = this.url.substr(n);
          0 === i.length
            ? ((i = r()), (this.jsonpCallback = e))
            : (this.jsonpCallback = this.jsonpCallback || window[i]),
            (window[i] = function (e) {
              a.parentNode && a.parentNode.removeChild(a),
                (t.content = e),
                t._onLoad();
            });
          var a = document.createElement("script");
          (a.type = "text/javascript"),
            (a.src = o + i),
            document.getElementsByTagName("head")[0].appendChild(a);
        }
        var a = e(29),
          u = e(28);
        (t.exports = o),
          (o.type = "jsonp"),
          (o.extensions = []),
          u.register(o),
          (o.retrieve = function (e) {
            return "string" == typeof e && e.indexOf("=") > -1 && [e];
          });
        var s = a.prototype,
          l = (o.prototype = new a());
        (l.constructor = o), (l.load = i);
      },
      {
        28: 28,
        29: 29,
      },
    ],
    35: [
      function (e, t, n) {
        function r(e, t) {
          e &&
            ((t.responseType = "text"), u.constructor.apply(this, arguments));
        }
        function o() {
          this.content || (this.content = this.xmlhttp.responseText),
            u._onLoad.apply(this, arguments);
        }
        var i = e(37),
          a = e(28);
        (t.exports = r),
          (r.type = "text"),
          (r.extensions = ["html", "txt", "svg"]),
          a.register(r),
          (r.retrieve = function () {
            return !1;
          });
        var u = i.prototype,
          s = (r.prototype = new i());
        (s.constructor = r), (s._onLoad = o);
      },
      {
        28: 28,
        37: 37,
      },
    ],
    36: [
      function (e, t, n) {
        function r(e, t) {
          if (e) {
            (this.loadThrough = !t || t.loadThrough === a || t.loadThrough),
              l.constructor.apply(this, arguments);
            try {
              this.content = new Video();
            } catch (e) {
              this.content = document.createElement("video");
            }
            this.crossOrigin && (this.content.crossOrigin = this.crossOrigin);
          }
        }
        function o() {
          l.load.apply(this, arguments);
          var e = this.content;
          (e.preload = "auto"),
            (e.src = this.url),
            this.loadThrough
              ? e.addEventListener("canplaythrough", this.boundOnLoad, !1)
              : e.addEventListener("canplay", this.boundOnLoad, !1),
            e.load();
        }
        function i() {
          this.content.removeEventListener("canplaythrough", this.boundOnLoad),
            this.content.removeEventListener("canplay", this.boundOnLoad),
            this.isLoaded || l._onLoad.call(this);
        }
        var a,
          u = e(29),
          s = e(28);
        (t.exports = r),
          (r.type = "video"),
          (r.extensions = ["mp4", "webm", "ogv"]),
          s.register(r),
          (r.retrieve = function (e) {
            return !1;
          });
        var l = u.prototype,
          c = (r.prototype = new u());
        (c.constructor = r), (c.load = o), (c._onLoad = i);
      },
      {
        28: 28,
        29: 29,
      },
    ],
    37: [
      function (e, t, n) {
        function r(e) {
          e &&
            (p.constructor.apply(this, arguments),
            (this.responseType = this.responseType || ""),
            (this.method = this.method || "GET"));
        }
        function o() {
          p.load.apply(this, arguments);
          var e,
            t = this;
          (e = this.xmlhttp =
            d ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")),
            this.hasLoading &&
              (e.onprogress = function (e) {
                t._onXmlHttpProgress(e);
              }),
            (e.onreadystatechange = function () {
              t._onXmlHttpChange();
            }),
            e.open(this.method, this.url, !0),
            (this.xmlhttp.responseType = this.responseType),
            d ? e.send(null) : e.send();
        }
        function i(e) {
          this.loadingSignal.dispatch(e.loaded / e.total);
        }
        function a() {
          4 === this.xmlhttp.readyState &&
            200 === this.xmlhttp.status &&
            this._onLoad(this.xmlhttp);
        }
        function u() {
          this.content || (this.content = this.xmlhttp.response),
            (this.xmlhttp = s),
            p._onLoad.call(this);
        }
        var s,
          l = e(29),
          c = e(28),
          d = !!window.XMLHttpRequest;
        (t.exports = r),
          (r.type = "xhr"),
          (r.extensions = []),
          c.register(r),
          (r.retrieve = function () {
            return !1;
          });
        var p = l.prototype,
          v = (r.prototype = new l());
        (v.constructor = r),
          (v.load = o),
          (v._onXmlHttpChange = a),
          (v._onXmlHttpProgress = i),
          (v._onLoad = u);
      },
      {
        28: 28,
        29: 29,
      },
    ],
    38: [
      function (e, t, n) {
        (function (n) {
          for (
            var r = e(26),
              o = "undefined" == typeof window ? n : window,
              i = ["moz", "webkit"],
              a = "AnimationFrame",
              u = o["request" + a],
              s = o["cancel" + a] || o["cancelRequest" + a],
              l = 0;
            !u && l < i.length;
            l++
          )
            (u = o[i[l] + "Request" + a]),
              (s = o[i[l] + "Cancel" + a] || o[i[l] + "CancelRequest" + a]);
          if (!u || !s) {
            var c = 0,
              d = 0,
              p = [];
            (u = function (e) {
              if (0 === p.length) {
                var t = r(),
                  n = Math.max(0, 1e3 / 60 - (t - c));
                (c = n + t),
                  setTimeout(function () {
                    var e = p.slice(0);
                    p.length = 0;
                    for (var t = 0; t < e.length; t++)
                      if (!e[t].cancelled)
                        try {
                          e[t].callback(c);
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          }, 0);
                        }
                  }, Math.round(n));
              }
              return (
                p.push({
                  handle: ++d,
                  callback: e,
                  cancelled: !1,
                }),
                d
              );
            }),
              (s = function (e) {
                for (var t = 0; t < p.length; t++)
                  p[t].handle === e && (p[t].cancelled = !0);
              });
          }
          (t.exports = function (e) {
            return u.call(o, e);
          }),
            (t.exports.cancel = function () {
              s.apply(o, arguments);
            }),
            (t.exports.polyfill = function () {
              (o.requestAnimationFrame = u), (o.cancelAnimationFrame = s);
            });
        }).call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      {
        26: 26,
      },
    ],
    39: [
      function (e, t, n) {
        function r(e) {
          if (n.hasInitialized) throw "core.js seems to be initialized twice.";
          d(
            n,
            {
              fov: 45,
              near: 50,
              far: 5e3,
            },
            e
          ),
            (m = n.renderer = n.renderer || new l.WebGLRenderer(n)),
            (v = n.gl = m.getContext()),
            (n.isEnabled = o()),
            (f = n.camera = new l.PerspectiveCamera(n.fov, 1, n.near, n.far)),
            (h = n.scene = new l.Scene()),
            (x = n.ignoredMaterial = new l.Material());
          var t = m.renderBufferDirect;
          (m.renderBufferDirect = function (e, n, r, o) {
            o !== x && t.apply(this, arguments);
          }),
            p.init(m),
            (n.hasInitialized = !0);
        }
        function o() {
          for (var e, t = !0, n = 0, r = g.length; n < r; n++)
            (e = g[n]),
              (e.results = s(e.getMethod, e.str)) ||
                (e.isStrict && (t = !1), console.log(e.msg));
          return t;
        }
        function i(e, t, n) {
          u("getParameter", e, t, n);
        }
        function a(e, t, n) {
          u("getExtension", e, t, n);
        }
        function u(e, t, n, r) {
          var o = g[t];
          o && n
            ? (o.isStrict = n)
            : (g[t] = {
                getMethod: e,
                str: t,
                isStrict: n,
                msg: r,
              });
        }
        function s(e, t) {
          return (t = t.indexOf(".") > 0 ? c(n, t) : t), v[e](t);
        }
        var l = e(46),
          c = e(17),
          d = e(21),
          p = e(42);
        (n.init = r),
          (n.requireParameter = i),
          (n.requireExtension = a),
          (n.hasInitialized = !1),
          (n.isEnabled = void 0);
        var v = (n.gl = void 0),
          m = (n.renderer = void 0),
          f = (n.camera = void 0),
          h = (n.scene = void 0),
          x = (n.ignoredMaterial = void 0),
          g = (n.requiredTestObjects = {});
      },
      {
        17: 17,
        21: 21,
        42: 42,
        46: 46,
      },
    ],
    40: [
      function (e, t, n) {
        var r = (e(24), e(19));
        (n.isMobile = /(iPad|iPhone|Android)/i.test(navigator.userAgent)),
          (n.assetPath = "./"),
          (n.qualityList = ["low", "medium", "high"]),
          (n.quality = 0),
          (n.bgColor = "rgba(0, 0, 0, 0)"),
          (n.emittersMotionTextureWidth = 1),
          (n.emittersMotionTextureHeight = 32),
          (n.particlesMotionTextureWidth = 512),
          (n.particlesMotionTextureHeight = 512),
          (n.useControls = !0),
          (n.initialAmimation = 0),
          (n.speed = 3),
          (n.curlSize = 1e-4),
          (n.mouseRatio = 1),
          (n.mouseStrength = 0.03),
          (n.particlesOuterSpeed = 0.65),
          (n.particlesEmittingSpeed = 1),
          (n.particlesEmittingStrength = 1),
          (n.particlesEmittingFriction = 2),
          (n.skipRendering = !1),
          (n.motionBlur = !0);
        var o = (n.motionBlurQualityMap = {
          best: 1,
          high: 0.5,
          medium: 1 / 3,
          low: 0.25,
        });
        (n.motionBlurQualityList = r(o)), (n.motionBlurQuality = "high");
      },
      {
        19: 19,
        24: 24,
      },
    ],
    41: [
      function (e, t, n) {
        function r(e) {
          var t;
          try {
            switch (e) {
              case "video":
                t = new l.Video();
                break;
              case "audio":
                t = new l.Audio();
            }
          } catch (n) {
            t = c.createElement(e);
          }
          for (
            var r, o = n[e + "FormatTestOrders"], i = 0, a = o.length;
            i < a;
            i++
          )
            if (t.canPlayType && t.canPlayType(o[i])) {
              r = o[i].substr(o[i].indexOf("/") + 1);
              break;
            }
          n[e + "Format"] = r;
        }
        function o(e) {
          for (
            var t = e.charAt(0).toUpperCase() + e.slice(1), n = u.length;
            n--;

          )
            if (s[u[n] + t] !== a) return n + 2;
          return s[e] !== a ? 1 : 0;
        }
        function i(e, t, n) {
          return (
            (!(e =
              t > 1
                ? u[t - 2] + e.charAt(0).toUpperCase() + e.slice(1)
                : 1 == t && e) ||
              !n ||
              ((s[e] = n), s[e] === n)) &&
            e
          );
        }
        var a,
          u = "Webkit Moz O ms".split(" "),
          s = document.createElement("div").style,
          l = window,
          c = document,
          d = c.body,
          p = navigator.userAgent.toLowerCase();
        !(function () {
          (n.videoFormatTestOrders = ["video/mp4", "video/webm", "video/ogg"]),
            (n.audioFormatTestOrders = ["audio/mp3", "audio/ogg"]),
            r("video"),
            r("audio"),
            (n.isIFrame = l.self !== l.top),
            (n.isPhantom = !!l.callPhantom),
            (n.transitionStyle = i("transition", o("transition"))),
            (n.transformStyle = i("transform", o("transform"))),
            (n.transform3dStyle = i("transform", o("perspective"))),
            (n.transformPerspectiveStyle = i("perspective", o("perspective"))),
            (n.transformOriginStyle = i(
              "transformOrigin",
              o("transformOrigin")
            )),
            (n.isRetina = l.devicePixelRatio && l.devicePixelRatio >= 1.5),
            (n.webkitFilter = d.style.webkitFilter !== a && "webkitFilter"),
            (n.isSupportOpacity = c.documentElement.style.opacity !== a),
            (n.isChrome = p.indexOf("chrome") > -1),
            (n.isStandalone = l.navigator.standalone),
            (n.isIOS = /iphone|ipod|ipad/.test(p)),
            (n.isSafari = /safari/.test(p)),
            (n.isIOSWebView = n.isIOS && !n.isStandalone && !n.isSafari),
            (n.isSupportPreserve3d = !!i(
              "transformStyle",
              o("transformStyle"),
              "preserve-3d"
            )),
            n.afterInit && n.afterInit(n);
        })();
      },
      {},
    ],
    42: [
      function (e, t, n) {
        function r(e) {
          c ||
            ((c = e),
            (h = n.rawShaderPrefix =
              "precision " + c.capabilities.precision + " float;\n"),
            (p = new m.Scene()),
            (v = new m.Camera()),
            (v.position.z = 1),
            (g = n.copyMaterial =
              new m.RawShaderMaterial({
                uniforms: {
                  u_texture: {
                    type: "t",
                    value: l,
                  },
                },
                vertexShader:
                  (x = n.vertexShader =
                    h +
                    "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n"),
                fragmentShader:
                  h +
                  "#define GLSLIFY 1\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    gl_FragColor = texture2D( u_texture, v_uv );\n}\n",
              })),
            (d = new m.Mesh(new m.PlaneBufferGeometry(2, 2), g)),
            p.add(d));
        }
        function o(e, t) {
          (d.material = g),
            (g.uniforms.u_texture.value = e),
            t ? c.render(p, v, t) : c.render(p, v);
        }
        function i(e, t) {
          (d.material = e), t ? c.render(p, v, t) : c.render(p, v);
        }
        function a(e, t, n, r, o, i) {
          var a = new m.WebGLRenderTarget(e || 1, t || 1, {
            format: n || m.RGBFormat,
            type: r || m.UnsignedByteType,
            minFilter: o || m.LinearFilter,
            magFilter: i || m.LinearFilter,
            depthBuffer: !1,
            stencilBuffer: !1,
          });
          return (
            f.isIOS && a.type === m.FloatType && (a.type = m.HalfFloatType),
            (a.texture.generateMipMaps = !1),
            a
          );
        }
        function u() {
          return {
            autoClearColor: c.autoClearColor,
            clearColor: c.getClearColor().getHex(),
            clearAlpha: c.getClearAlpha(),
          };
        }
        function s(e) {
          c.setClearColor(e.clearColor, e.clearAlpha),
            (c.autoClearColor = e.autoClearColor);
        }
        var l,
          c,
          d,
          p,
          v,
          m = e(46),
          f = e(41),
          h = (n.rawShaderPrefix = l),
          x = (n.vertexShader = l),
          g = (n.copyMaterial = l);
        (n.init = r),
          (n.copy = o),
          (n.render = i),
          (n.createRenderTarget = a),
          (n.getColorState = u),
          (n.setColorState = s);
      },
      {
        41: 41,
        46: 46,
      },
    ],
    43: [
      function (e, t, n) {
        function r(e) {
          return (c = {}), e.replace(v, a);
        }
        function o(e) {
          for (var t = !1; t || d > 0; )
            (d = 0), (e = e.replace(f, u)), (e = e.replace(m, u)), (t = !1);
          return e;
        }
        function i(e) {
          return e.replace(h, s);
        }
        function a(e, t, n) {
          return (c[t.trim()] = n), "";
        }
        function u(e, t) {
          var n =
            "// chunk_begin(" +
            t +
            ");\n" +
            p.ShaderChunk[t] +
            "\n// chunk_end(" +
            t +
            ");\\n";
          for (var r in c) n = n.replace(r, c[r]);
          return n;
        }
        function s(e, t) {
          return t;
        }
        function l(e) {
          return (e = r(e)), (e = o(e)), i(e);
        }
        var c,
          d,
          p = e(46),
          v = /\/\/\s?chunk_replace\s(.+)([\d\D]+)\/\/\s?end_chunk_replace/gm,
          m = /\s?#include\s?<\s?(\w+)\s?>/g,
          f = /\/\/\s?chunk\(\s?(\w+)\s?\);/g,
          h = /GLOBAL_VAR_([^\.\)\;\,\s]+)(_\d+)/g;
        t.exports = l;
      },
      {
        46: 46,
      },
    ],
    44: [
      function (e, t, n) {
        function r(e) {
          g(
            T,
            {
              assetPath: "./",
            },
            e
          ),
            R.preload(),
            A.preload(),
            _.start(function (e) {
              1 === e && o();
            });
        }
        function o(e) {
          g(
            T,
            {
              inputEventTarget: p,
              useControls: !1,
              useGui: !0,
            },
            e
          ),
            b.init({
              canvas: document.querySelector("canvas"),
              premultipliedAlpha: !1,
              antialias: !1,
              alpha: !0,
            }),
            (T.resolution = new w.Vector2()),
            (h = b.renderer),
            (f = b.scene),
            (f.fog = new w.FogExp2(395793, 0.001)),
            (m = T.camera = b.camera),
            (m.position.z = 3e3),
            (T.tmpMouse = new w.Vector2(0, 0)),
            (T.mouse = new w.Vector2(0, 0)),
            (T.prevMouse = new w.Vector2(0, 0)),
            (T.mouseBound = new w.Vector2(0, 300)),
            (T.projectionMatrix = new w.Matrix4()),
            (T.unprojectionMatrix = new w.Matrix4()),
            (T.prevCamera = b.camera.clone());
          var t = new w.AmbientLight(16777215);
          f.add(t),
            M.init(h, f, m),
            h.setClearColor(T.bgColor),
            R.init(),
            A.init(),
            f.add(N.mesh),
            (E.linesRenderTargetScale =
              T.motionBlurQualityMap[T.motionBlurQuality]),
            T.useGui && window.dat,
            D.init(),
            window.addEventListener("visibilitychange", i),
            window.addEventListener("resize", s),
            window.addEventListener("mousemove", u),
            window.addEventListener("touchmove", a(u)),
            S.set(T, {
              initialAmimation: 0,
            }),
            S.to(T, 3, {
              initialAmimation: 1,
              ease: "easeInOutSine",
            }),
            S.to(m.position, 3, {
              z: 1e3,
              ease: "easeOutSine",
            }),
            s(),
            i(),
            l();
        }
        function i() {
          (O = Date.now()), d();
        }
        function a(e) {
          return function (t) {
            e(t.changedTouches[0]);
          };
        }
        function u(e) {
          T.tmpMouse.set(
            (e.pageX / window.innerWidth) * 2 - 1,
            (-e.pageY / window.innerHeight) * 2 + 1
          );
        }
        function s() {
          (L = T.width = window.innerWidth),
            (P = T.height = window.innerHeight),
            D.resize(L, P),
            T.resolution.set(L, P),
            M.resize(L, P);
        }
        function l() {
          var e = Date.now();
          (x = y(l)),
            T.useStats && v.begin(),
            c((e - O) / 1e3, e / 1e3),
            T.useStats && v.end(),
            (O = e);
        }
        function c(e, t) {
          if (!T.skipRendering) {
            (e = e || 0), (T.deltaRatio = e / 0.016), (t = t || Date.now());
            var n = T.speed + (1 - T.initialAmimation) * e * 100;
            (e *= n),
              m.lookAt(f.position),
              m.updateMatrixWorld(),
              T.mouse.lerp(T.tmpMouse, 0.05),
              T.projectionMatrix.multiplyMatrices(
                T.camera.projectionMatrix,
                T.camera.matrixWorldInverse
              ),
              T.unprojectionMatrix.getInverse(T.projectionMatrix),
              (T.mouseBound.x = Math.min(T.mouseBound.x, T.mouseBound.y)),
              (I.positionUniforms.u_speed.value = n),
              R.render(e, t),
              (C.positionUniforms.u_speed.value = n),
              A.render(e, t),
              M.render(e, t),
              d(),
              T.prevMouse.copy(T.mouse);
          }
        }
        function d() {
          T.prevCamera.matrixWorldInverse.copy(T.camera.matrixWorldInverse),
            T.prevCamera.projectionMatrix.copy(T.camera.projectionMatrix);
        }
        var p,
          v,
          m,
          f,
          h,
          x,
          g = e(21),
          _ = e(27),
          y = e(38),
          S = e(45),
          w = e(46),
          T = e(40),
          b = e(39),
          M = e(61),
          E = (e(55), e(58), e(60)),
          R = (e(56), e(47)),
          I = e(48),
          A = e(49),
          C = e(50),
          N = e(52),
          D = e(53),
          L = 0,
          P = 0,
          O = 0;
        D.preload(r);
      },
      {
        21: 21,
        27: 27,
        38: 38,
        39: 39,
        40: 40,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
        50: 50,
        52: 52,
        53: 53,
        55: 55,
        56: 56,
        58: 58,
        60: 60,
        61: 61,
      },
    ],
    45: [
      function (e, t, n) {
        t.exports = window.TweenMax;
      },
      {},
    ],
    46: [
      function (e, t, n) {
        t.exports = window.THREE;
      },
      {},
    ],
    47: [
      function (e, t, n) {
        function r() {}
        function o() {
          (s = n.mesh = new a.Object3D()), u.init();
        }
        function i(e) {
          u.update(e);
        }
        var a = e(46),
          u = e(48),
          s = (n.mesh = void 0);
        (n.preload = r), (n.init = o), (n.render = i);
      },
      {
        46: 46,
        48: 48,
      },
    ],
    48: [
      function (e, t, n) {
        function r() {
          var e = c.emittersMotionTextureWidth,
            t = c.emittersMotionTextureHeight;
          (u = new p.RawShaderMaterial({
            uniforms: (n.positionUniforms = {
              u_defaultPositionTexture: {
                type: "t",
                value: a,
              },
              u_positionTexture: {
                type: "t",
                value: a,
              },
              u_speed: {
                type: "f",
                value: 1,
              },
              u_time: {
                type: "f",
                value: 0,
              },
              u_deltaTime: {
                type: "f",
                value: 0,
              },
              u_deltaRatio: {
                type: "f",
                value: 1,
              },
              u_curlSize: {
                type: "f",
                value: 0.005,
              },
            }),
            vertexShader: m.vertexShader,
            fragmentShader:
              m.rawShaderPrefix +
              "\n\n" +
              v(
                "#define GLSLIFY 1\nuniform sampler2D u_defaultPositionTexture;\nuniform sampler2D u_positionTexture;\nuniform float u_time;\nuniform float u_speed;\nuniform float u_deltaRatio;\nuniform float u_curlSize;\n\nvarying vec2 v_uv;\n\nvec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    return vec4(dx, dy, dz, dw) * 49.0;\n}\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 3; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        zNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],\n        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]\n    );\n\n}\n\n#define PI 3.141592\n#define PI2 6.283184\n\nvoid main() {\n\n    vec2 uv = vec2(0.0, v_uv.y);\n    vec4 positionInfo = texture2D( u_positionTexture, uv );\n    vec3 position = positionInfo.xyz;\n    float color;\n\n    vec4 randoms = texture2D( u_defaultPositionTexture, uv );\n    vec3 targetPos = vec3(\n        sin(u_time * (randoms.x - 0.5) + randoms.y * PI2) * 150.0,\n        sin(u_time * (randoms.z - 0.5) + randoms.z * PI2) * 150.0,\n        sin(u_time * (randoms.y - 0.5) + randoms.x * PI2) * 150.0\n    );\n\n    vec3 delta = targetPos - position;\n    position += delta * smoothstep(300.0, 500.0, length(delta)) * u_deltaRatio;\n    position += curl(position * u_curlSize, u_time * 0.2, 0.2) * u_speed * 2.0;\n\n    gl_FragColor = vec4(position, positionInfo.w);\n\n}\n"
              ),
            blending: p.NoBlending,
            transparent: !1,
            depthWrite: !1,
            depthTest: !1,
          })),
            (s = m.createRenderTarget(
              e,
              t,
              p.RGBAFormat,
              p.FloatType,
              p.NearestFilter,
              p.NearestFilter
            )),
            (l = s.clone()),
            o(),
            m.copy(f, s),
            m.copy(f, l);
        }
        function o() {
          for (
            var e,
              t = c.emittersMotionTextureWidth,
              r = c.emittersMotionTextureHeight,
              o = t * r,
              i = new Float32Array(4 * o),
              a = 0;
            a < o;
            a++
          )
            (e = 4 * a),
              (i[e + 0] = Math.random()),
              (i[e + 1] = Math.random()),
              (i[e + 2] = Math.random()),
              (i[e + 3] = Math.random());
          var u = new p.DataTexture(i, t, r, p.RGBAFormat, p.FloatType);
          (u.minFilter = p.NearestFilter),
            (u.magFilter = p.NearestFilter),
            (u.needsUpdate = !0),
            (u.generateMipmaps = !1),
            (u.flipY = !1),
            (f = n.defaultRenderTarget = u);
        }
        function i(e) {
          var t = m.getColorState();
          d.renderer.autoClearColor = !1;
          var r = s;
          (s = l),
            (l = r),
            (u.uniforms.u_defaultPositionTexture.value = f),
            (u.uniforms.u_positionTexture.value = l),
            (u.uniforms.u_time.value += e),
            (u.uniforms.u_deltaTime.value = e),
            (u.uniforms.u_deltaRatio.value = c.deltaRatio),
            (u.uniforms.u_curlSize.value = c.curlSize),
            m.render(u, s),
            h && m.copy(s, l),
            (n.positionRenderTarget = s),
            (n.prevPositionRenderTarget = l),
            m.setColorState(t),
            (h = !1);
        }
        var a,
          u,
          s,
          l,
          c = e(40),
          d = e(39),
          p = e(46),
          v = e(43),
          m = e(42),
          f = (n.defaultRenderTarget = a),
          h = !0;
        (n.positionRenderTarget = a),
          (n.prevPositionRenderTarget = a),
          (n.rotationRenderTarget = a),
          (n.prevRotationRenderTarget = a),
          (n.init = r),
          (n.update = i),
          d.requireParameter(
            "gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS",
            !0,
            "No support for vertex shader textures!"
          ),
          d.requireExtension(
            "OES_texture_float",
            !0,
            "No OES_texture_float support for float textures!"
          );
      },
      {
        39: 39,
        40: 40,
        42: 42,
        43: 43,
        46: 46,
      },
    ],
    49: [
      function (e, t, n) {
        function r() {
          s.preload();
        }
        function o() {
          (l = n.mesh = new a.Object3D()), u.init(), s.init();
        }
        function i(e) {
          u.update(e), s.update(e);
        }
        var a = e(46),
          u = e(50),
          s = e(52),
          l = (n.mesh = void 0);
        (n.preload = r), (n.init = o), (n.render = i);
      },
      {
        46: 46,
        50: 50,
        52: 52,
      },
    ],
    50: [
      function (e, t, n) {
        function r() {
          var e = d.particlesMotionTextureWidth,
            t = d.particlesMotionTextureHeight;
          (u = new v.RawShaderMaterial({
            uniforms: (n.positionUniforms = {
              u_emittersPositionTexture: {
                type: "t",
                value: a,
              },
              u_defaultPositionTexture: {
                type: "t",
                value: a,
              },
              u_positionTexture: {
                type: "t",
                value: a,
              },
              u_speed: {
                type: "f",
                value: 1,
              },
              u_time: {
                type: "f",
                value: 0,
              },
              u_deltaTime: {
                type: "f",
                value: 0,
              },
              u_dieSpeed: {
                type: "f",
                value: 1,
              },
              u_outerSpeed: {
                type: "f",
                value: 1,
              },
              u_emittingSpeed: {
                type: "f",
                value: 1,
              },
              u_curlSize: {
                type: "f",
                value: 0.005,
              },
              u_emittingStrength: {
                type: "f",
                value: 10,
              },
              u_emittingFriction: {
                type: "f",
                value: 3,
              },
              u_deltaRatio: {
                type: "f",
                value: 1,
              },
              u_mouseRatio: {
                type: "float",
                value: 0,
              },
              u_mouseStrength: {
                type: "float",
                value: 0,
              },
              u_mouseBound: {
                type: "v2",
                value: d.mouseBound,
              },
              u_mouse: {
                type: "v2",
                value: d.mouse,
              },
              u_prevMouse: {
                type: "v2",
                value: d.prevMouse,
              },
              u_screenResolution: {
                type: "v2",
                value: d.resolution,
              },
              u_projectionMatrix: {
                type: "m4",
                value: d.projectionMatrix,
              },
              u_unprojectionMatrix: {
                type: "m4",
                value: d.unprojectionMatrix,
              },
            }),
            vertexShader: h.vertexShader,
            fragmentShader:
              h.rawShaderPrefix +
              f(
                "#define GLSLIFY 1\nuniform sampler2D u_defaultPositionTexture;\nuniform sampler2D u_emittersPositionTexture;\nuniform sampler2D u_positionTexture;\n\nuniform float u_time;\nuniform float u_speed;\nuniform float u_deltaTime;\nuniform float u_curlSize;\nuniform float u_dieSpeed;\nuniform float u_outerSpeed;\nuniform float u_emittingSpeed;\nuniform float u_emittingStrength;\nuniform float u_emittingFriction;\nuniform float u_deltaRatio;\n\nuniform float u_mouseRatio;\nuniform float u_mouseStrength;\nuniform vec2 u_mouseBound;\nuniform vec2 u_mouse;\nuniform vec2 u_screenResolution;\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_unprojectionMatrix;\n\nvarying vec2 v_uv;\n\nvec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    return vec4(dx, dy, dz, dw) * 49.0;\n}\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 3; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        zNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],\n        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]\n    );\n\n}\n\nvoid main() {\n\n    vec4 positionInfo = texture2D( u_positionTexture, v_uv );\n    vec3 position = positionInfo.xyz;\n    float color;\n    float life = positionInfo.w - u_deltaTime * u_dieSpeed * 0.3;\n    // float life = positionInfo.w - 0.016 * 0.2;\n\n    if(life < 0.001) {\n        position = texture2D( u_emittersPositionTexture, vec2(0.0, v_uv.y) ).xyz;\n        life += 1.0;\n    } else {\n        position += curl(position * u_curlSize, u_time * 0.2, 0.2) * u_speed * u_deltaRatio;\n    }\n\n    position += texture2D( u_defaultPositionTexture, v_uv ).xyz * u_emittingSpeed * mix(1.0, u_emittingStrength, pow(life, u_emittingFriction)) * u_speed * u_deltaRatio;\n\n    float outerRatio = mix(6.0, 0.0, pow(abs(life - 0.5) *2.0, 5.0)) * u_deltaTime * 0.05 * u_outerSpeed;\n\n    position *= 1.0 + outerRatio;\n\n    // position.z -= outerRatio;\n\n    vec4 glPosition = u_projectionMatrix * vec4(position, 1.0);\n    // vec2 screenXY = glPosition.xy / glPosition.w;\n    // vec2 delta = (screenXY - u_mouse) * u_screenResolution * 0.5;\n    // float mouseRatio = u_mouseRatio * life;\n    // vec2 offset = normalize(delta) * (1.0 - smoothstep(u_mouseBound.x * mouseRatio, u_mouseBound.y * mouseRatio, length(delta))) * u_mouseStrength * mouseRatio;\n    // glPosition.xy += offset * glPosition.w;\n    // position = (u_unprojectionMatrix * glPosition).xyz;\n\n    gl_FragColor = vec4(position, life);\n\n}\n"
              ),
            blending: v.NoBlending,
            transparent: !1,
            depthWrite: !1,
            depthTest: !1,
          })),
            (s = h.createRenderTarget(
              e,
              t,
              v.RGBAFormat,
              v.FloatType,
              v.NearestFilter,
              v.NearestFilter
            )),
            (l = s.clone()),
            (c = s.clone()),
            o(),
            h.copy(x, s),
            h.copy(x, l),
            h.copy(x, c);
        }
        function o() {
          for (
            var e,
              t = d.particlesMotionTextureWidth,
              r = d.particlesMotionTextureHeight,
              o = t * r,
              i = new Float32Array(4 * o),
              a = 0;
            a < o;
            a++
          )
            (e = 4 * a),
              (i[e + 0] = Math.random() - 0.5),
              (i[e + 1] = Math.random() - 0.5),
              (i[e + 2] = Math.random() - 0.5),
              (i[e + 3] = (a % t) / t);
          var u = new v.DataTexture(i, t, r, v.RGBAFormat, v.FloatType);
          (u.minFilter = v.NearestFilter),
            (u.magFilter = v.NearestFilter),
            (u.needsUpdate = !0),
            (u.generateMipmaps = !1),
            (u.flipY = !1),
            (x = n.defaultRenderTarget = u);
        }
        function i(e) {
          var t = h.getColorState();
          p.renderer.autoClearColor = !1;
          var r = c;
          (c = l),
            (l = s),
            (s = r),
            (u.uniforms.u_emittersPositionTexture.value =
              m.positionRenderTarget),
            (u.uniforms.u_defaultPositionTexture.value = x),
            (u.uniforms.u_positionTexture.value = l),
            (u.uniforms.u_time.value += e),
            (u.uniforms.u_deltaTime.value = e),
            (u.uniforms.u_curlSize.value = d.curlSize),
            (u.uniforms.u_outerSpeed.value = d.particlesOuterSpeed),
            (u.uniforms.u_emittingSpeed.value = d.particlesEmittingSpeed),
            (u.uniforms.u_emittingStrength.value = d.particlesEmittingStrength),
            (u.uniforms.u_emittingFriction.value = d.particlesEmittingFriction),
            (u.uniforms.u_mouseRatio.value = d.mouseRatio),
            (u.uniforms.u_mouseStrength.value = d.mouseStrength),
            (u.uniforms.u_deltaRatio.value = d.deltaRatio),
            h.render(u, s),
            h.setColorState(t),
            (n.positionRenderTarget = s),
            (n.prevPositionRenderTarget = l),
            (n.prevPrevPositionRenderTarget = c);
        }
        var a,
          u,
          s,
          l,
          c,
          d = e(40),
          p = e(39),
          v = e(46),
          m = e(48),
          f = e(43),
          h = e(42),
          x = (n.defaultRenderTarget = a);
        (n.positionRenderTarget = a),
          (n.prevPositionRenderTarget = a),
          (n.prevPrevPositionRenderTarget = a),
          (n.init = r),
          (n.update = i),
          p.requireParameter(
            "gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS",
            !0,
            "No support for vertex shader textures!"
          ),
          p.requireExtension(
            "OES_texture_float",
            !0,
            "No OES_texture_float support for float textures!"
          );
      },
      {
        39: 39,
        40: 40,
        42: 42,
        43: 43,
        46: 46,
        48: 48,
      },
    ],
    51: [
      function (e, t, n) {
        function r() {}
        function o() {}
        function i(e) {
          v(
            this,
            {
              defines: {},
              uniforms: {
                u_particleScreenScalar: {
                  type: "f",
                  value: 1,
                },
                u_positionTexture: {
                  type: "t",
                  value: c,
                },
                u_screenResolution: {
                  type: "v2",
                  value: d.resolution,
                },
                u_time: {
                  type: "f",
                  value: 0,
                },
                u_initialAmimation: {
                  type: "f",
                  value: 0,
                },
              },
              vertexShader: "",
              fragmentShader: "",
              needsPrevPosition: !1,
            },
            e
          ),
            this.needsPrevPosition &&
              (this.uniforms.u_prevPositionTexture = {
                type: "t",
                value: c,
              }),
            this._initGeometry(),
            this._initMaterial(),
            this._initMesh();
        }
        function a() {
          for (
            var e,
              t = d.particlesMotionTextureWidth,
              n = d.particlesMotionTextureHeight,
              r = t * n,
              o = new Float32Array(3 * r),
              i = 0;
            i < r;
            i++
          )
            (e = 3 * i),
              (o[e + 0] = ((i % t) + 0.5) / t),
              (o[e + 1] = (0.5 + ~~(i / t)) / n),
              (o[e + 2] = Math.random());
          (this.geometry = new m.BufferGeometry()),
            this.geometry.addAttribute("position", new m.BufferAttribute(o, 3));
        }
        function u() {
          this.material = new m.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: this.vertexShader,
            fragmentShader: this.fragmentShader,
            defines: this.defines,
          });
        }
        function s() {
          (this.mesh = new m.Points(this.geometry, this.material)),
            (this.mesh.frustumCulled = !1);
        }
        function l(e) {
          (this.uniforms.u_particleScreenScalar.value = d.resolution.y / 1080),
            (this.uniforms.u_positionTexture.value = p.positionRenderTarget),
            this.needsPrevPosition &&
              (this.uniforms.u_prevPositionTexture.value =
                p.prevPositionRenderTarget),
            (this.uniforms.u_time.value += e),
            (this.uniforms.u_initialAmimation.value = d.initialAmimation);
        }
        var c,
          d = e(40),
          p = e(50),
          v = e(20),
          m = e(46);
        t.exports = r;
        var f = r.prototype;
        (f.preload = o),
          (f.init = i),
          (f._initGeometry = a),
          (f._initMaterial = u),
          (f._initMesh = s),
          (f.update = l);
      },
      {
        20: 20,
        40: 40,
        46: 46,
        50: 50,
      },
    ],
    52: [
      function (e, t, n) {
        function r() {}
        function o() {
          y = x.add(d.assetPath + "images/motion_blur.png").content;
        }
        function i() {
          S = new f.Matrix4();
          var e = new f.Texture(y);
          (e.encoding = f.sRGBEncoding),
            (e.anisotropy = 8),
            (e.needsUpdate = !0),
            (e.flipY = !1),
            _.init.call(this, {
              uniforms: {
                u_size: {
                  type: "f",
                  value: n.size,
                },
                u_randomFadeInRatio: {
                  type: "f",
                  value: 0,
                },
                u_color1: {
                  type: "c",
                  value: new f.Color(5608600),
                },
                u_color2: {
                  type: "c",
                  value: new f.Color(2636109),
                },
                u_color3: {
                  type: "c",
                  value: new f.Color(7501126),
                },
                u_color4: {
                  type: "c",
                  value: new f.Color(6569749),
                },
                u_blurTexture: {
                  type: "t",
                  value: e,
                },
                u_prevWorldMatrix: {
                  type: "m4",
                  value: S,
                },
                u_prevViewMatrix: {
                  type: "m4",
                  value: d.prevCamera.matrixWorldInverse,
                },
                u_prevProjectMatrix: {
                  type: "m4",
                  value: d.prevCamera.projectionMatrix,
                },
              },
              vertexShader: v(
                "#define GLSLIFY 1\nattribute vec2 a_uv;\nattribute vec2 a_offset;\n\nuniform sampler2D u_positionTexture;\nuniform sampler2D u_prevPositionTexture;\nuniform vec2 u_screenResolution;\nuniform float u_particleScreenScalar;\nuniform float u_size;\nuniform float u_randomFadeInRatio;\n\nuniform vec3 u_color1;\nuniform vec3 u_color2;\nuniform vec3 u_color3;\nuniform vec3 u_color4;\n\nuniform mat4 u_prevWorldMatrix;\nuniform mat4 u_prevViewMatrix;\nuniform mat4 u_prevProjectMatrix;\n\nvarying float v_random;\nvarying mat2 v_rot;\nvarying vec2 v_uv;\nvarying vec3 v_normal;\nvarying vec3 v_color1;\nvarying vec3 v_color2;\n\nvoid main() {\n\n    v_random = position.z;\n\n    vec4 positionInfo = texture2D( u_positionTexture, position.xy );\n    vec4 pos = vec4(positionInfo.xyz, 1.0);\n    vec4 prevPosition = vec4(texture2D( u_prevPositionTexture, position.xy ).xyz, 1.0);\n\n    vec4 worldPosition = modelMatrix * pos;\n    v_normal = normalize(vec3(500.0) - worldPosition.xyz);\n\n    vec4 mvPosition = viewMatrix * worldPosition;\n    v_color1 = mix(u_color1,  u_color3, positionInfo.w);\n    v_color2 = mix(u_color2,  u_color4, positionInfo.w);\n\n    pos = projectionMatrix * mvPosition;\n    prevPosition = u_prevProjectMatrix * u_prevViewMatrix * u_prevWorldMatrix * prevPosition;\n    vec2 resolutionOverW = u_screenResolution / pos.w;\n    vec2 screenXY = pos.xy * resolutionOverW;\n    vec2 prevScreenXY = prevPosition.xy / prevPosition.w * u_screenResolution;\n    float rotate = atan(screenXY.y - prevScreenXY.y, screenXY.x - prevScreenXY.x) + 1.570796325;\n    vec2 rotates = vec2(sin(rotate), cos(rotate));\n    v_rot = mat2(rotates.y, rotates.x, -rotates.x, rotates.y);\n\n    float size = min(300.0, (2100.0 * u_size * position.z * u_particleScreenScalar / max(1.0, pos.z)) * smoothstep(-0.5, -0.4, -abs(fract(positionInfo.w) - 0.5)));\n    size *= smoothstep(-1.0, -1.0 + position.z * u_randomFadeInRatio, -positionInfo.w);\n\n    vec2 offset = a_offset * smoothstep(-38.0, -28.0, -size);\n\n    float scaleY = min(length(screenXY - prevScreenXY) / size * 3.0, 2.0);\n    float index = floor(scaleY * 15.5); // 0 - 31\n    float isSecondRow = step(15.5, index);\n    float revIndex = index + (47.0 - index * 2.0) * isSecondRow;\n\n    // x y\n    v_uv = vec2(\n        (mod(revIndex, 16.0)  + a_uv.x) * 0.0625,\n        isSecondRow * revIndex * 0.015625 + a_uv.y * (0.25 + index * 0.015625)\n    );\n\n    offset.y *= 1.0 + step(0.0, offset.y) * scaleY * 2.5;\n    offset = v_rot * offset;\n    pos.xy += offset / resolutionOverW * size;\n    gl_Position = pos;\n\n}\n"
              ),
              fragmentShader: v(
                "#define GLSLIFY 1\nuniform sampler2D u_blurTexture;\nuniform float u_initialAmimation;\n\nvarying float v_random;\nvarying vec3 v_color1;\nvarying vec3 v_color2;\nvarying mat2 v_rot;\nvarying vec2 v_uv;\nvarying vec3 v_normal;\n\nvoid main() {\n\n    vec4 color = texture2D( u_blurTexture, v_uv );\n\n    vec3 normal = normalize(color.xyz - 0.5);\n\n    normal.yx = v_rot * normal.yx;\n    normal.y *= -1.0;\n    normal = normalize(normal);\n\n    float light = max(0.0, dot(v_normal, normal));\n\n    color.xyz = mix(v_color1, v_color2, light);\n    color.a *= u_initialAmimation;\n\n    gl_FragColor = color;\n\n}\n"
              ),
              needsPrevPosition: !0,
            }),
            (this.material.blending = f.AdditiveBlending),
            (this.material.depthTest = !1),
            (this.material.depthWrite = !1),
            (this.material.transparent = !0);
        }
        function a() {
          for (
            var e,
              t,
              n = d.particlesMotionTextureWidth,
              r = d.particlesMotionTextureHeight,
              o = (n * r) >> w,
              i = new Float32Array(6 * o * 3),
              a = new Float32Array(6 * o * 2),
              u = new Float32Array(6 * o * 2),
              s = 1 << w,
              l = 0,
              c = 0,
              p = 0,
              v = 0;
            v < o;
            v++
          )
            (e = ((l % n) + 0.5) / n),
              (t = (0.5 + ~~(l / n)) / r),
              (i[p + 0] =
                i[p + 3] =
                i[p + 6] =
                i[p + 9] =
                i[p + 12] =
                i[p + 15] =
                  e),
              (i[p + 1] =
                i[p + 4] =
                i[p + 7] =
                i[p + 10] =
                i[p + 13] =
                i[p + 16] =
                  t),
              (i[p + 2] =
                i[p + 5] =
                i[p + 8] =
                i[p + 11] =
                i[p + 14] =
                i[p + 17] =
                  Math.random()),
              (a[c + 0] =
                a[c + 1] =
                a[c + 3] =
                a[c + 4] =
                a[c + 7] =
                a[c + 10] =
                  0),
              (a[c + 2] =
                a[c + 5] =
                a[c + 6] =
                a[c + 8] =
                a[c + 9] =
                a[c + 11] =
                  1),
              (u[c + 0] =
                u[c + 1] =
                u[c + 3] =
                u[c + 4] =
                u[c + 7] =
                u[c + 10] =
                  -0.5),
              (u[c + 2] =
                u[c + 5] =
                u[c + 6] =
                u[c + 8] =
                u[c + 9] =
                u[c + 11] =
                  0.5),
              (c += 12),
              (p += 18),
              (l += s);
          (this.geometry = new f.BufferGeometry()),
            this.geometry.addAttribute("position", new f.BufferAttribute(i, 3)),
            this.geometry.addAttribute("a_uv", new f.BufferAttribute(a, 2)),
            this.geometry.addAttribute("a_offset", new f.BufferAttribute(u, 2));
        }
        function u() {
          (this.uniforms = h(
            f.UniformsUtils.merge([f.ShaderLib.standard.uniforms]),
            this.uniforms
          )),
            (this.material = new f.MeshPhysicalMaterial({
              color: 16711680,
            })),
            h(this.material, {
              type: "ShaderMaterial",
              uniforms: this.uniforms,
              vertexShader: this.vertexShader,
              fragmentShader: this.fragmentShader,
              defines: this.defines,
            });
        }
        function s() {
          (this.mesh = new f.Mesh(this.geometry, this.material)),
            (this.mesh.frustumCulled = !1),
            (this.mesh.motionMaterial = new m({
              uniforms: h(
                {
                  u_prevPositionTexture: {
                    type: "t",
                    value: c,
                  },
                },
                this.uniforms
              ),
              vertexShader: v(
                "#define GLSLIFY 1\n//attribute vec2 a_uv;\nattribute vec2 a_offset;\n\nuniform sampler2D u_positionTexture;\nuniform sampler2D u_prevPositionTexture;\nuniform vec2 u_screenResolution;\nuniform float u_particleScreenScalar;\nuniform float u_size;\nuniform float u_randomFadeInRatio;\n\nuniform mat4 u_prevWorldMatrix;\nuniform mat4 u_prevViewMatrix;\nuniform mat4 u_prevProjectMatrix;\n\nvarying vec2 v_motion;\n\nvoid main() {\n\n    vec4 positionInfo = texture2D( u_positionTexture, position.xy );\n    vec4 pos = vec4(positionInfo.xyz, 1.0);\n    vec4 prevPosition = vec4(texture2D( u_prevPositionTexture, position.xy ).xyz, 1.0);\n\n    pos = projectionMatrix * modelViewMatrix * pos;\n    prevPosition = u_prevProjectMatrix * u_prevViewMatrix * u_prevWorldMatrix * prevPosition;\n\n    float size = min(300.0, (2100.0 * u_size * position.z * u_particleScreenScalar / max(1.0, pos.z)) * smoothstep(-0.5, -0.4, -abs(fract(positionInfo.w) - 0.5)));\n    size *= smoothstep(-1.0, -1.0 + position.z * u_randomFadeInRatio, -positionInfo.w);\n\n    vec2 screenXY = pos.xy / pos.w * u_screenResolution;\n    vec2 prevScreenXY = prevPosition.xy / prevPosition.w * u_screenResolution;\n    float rotate = atan(screenXY.y - prevScreenXY.y, screenXY.x - prevScreenXY.x) + 1.570796325;\n    vec2 rotates = vec2(sin(rotate), cos(rotate));\n\n    vec2 offset = a_offset * smoothstep(-38.0, -28.0, -size);\n    float scaleY = min(length(screenXY - prevScreenXY) / size * 3.0, 2.0);\n    offset.y *= 1.0 + step(0.0, offset.y) * scaleY * 2.5;\n    offset = mat2(rotates.y, rotates.x, -rotates.x, rotates.y) * offset;\n\n    pos.xy += offset * pos.w / u_screenResolution * size;\n    prevPosition.xy += offset * prevPosition.w / u_screenResolution * size;\n\n    gl_Position = pos;\n    v_motion = (pos.xy / pos.w - prevPosition.xy / prevPosition.w) * 0.5;\n}\n"
              ),
            }));
        }
        function l(e) {
          n.needsResetWorldMatrix
            ? ((n.needsResetWorldMatrix = !1),
              (this.uniforms.u_prevWorldMatrix.value = this.mesh.matrixWorld))
            : (S.copy(this.mesh.matrixWorld),
              (this.uniforms.u_prevWorldMatrix.value = S)),
            (this.uniforms.u_randomFadeInRatio.value = n.randomFadeInRatio),
            this.uniforms.u_color1.value.lerp(this.color1, e),
            this.uniforms.u_color2.value.lerp(this.color2, e),
            this.uniforms.u_color3.value.lerp(this.color3, e),
            this.uniforms.u_color4.value.lerp(this.color4, e),
            (this.mesh.motionMaterial.uniforms.u_randomFadeInRatio.value =
              n.randomFadeInRatio),
            _.update.call(this, e);
        }
        var c,
          d = e(40),
          p = e(51),
          v = e(43),
          m = e(59),
          f = e(46),
          h = e(21),
          x = e(27),
          g = (r.prototype = new p()),
          _ = p.prototype;
        (g.preload = o),
          (g.init = i),
          (g._initGeometry = a),
          (g._initMaterial = u),
          (g._initMesh = s),
          (g.update = l);
        var n = (t.exports = new r());
        (n.needsResetWorldMatrix = !0),
          (n.randomFadeInRatio = 0.3),
          (n.size = 2),
          (n.color1 = new f.Color(5608600)),
          (n.color2 = new f.Color(2636109)),
          (n.color3 = new f.Color(7501126)),
          (n.color4 = new f.Color(6569749));
        var y,
          S,
          w = 0;
      },
      {
        21: 21,
        27: 27,
        40: 40,
        43: 43,
        46: 46,
        51: 51,
        59: 59,
      },
    ],
    53: [
      function (e, t, n) {
        function r(e) {
          (G = e),
            w.add("images/logo.png"),
            w.start(function (e) {
              1 === e && o();
            });
        }
        function o() {
          (C = document.body),
            (N = document.querySelector("canvas")),
            (D = document.querySelector(".ui")),
            (L = document.querySelector(".logo")),
            L.addEventListener("click", a),
            (P = document.querySelector(".quality-selector")),
            (O = document.querySelector(".quality-title")),
            (z = document.querySelectorAll(".quality-btn")),
            (F = document.querySelector(".menu")),
            (B = document.querySelector(".iframe-container")),
            (W = document.querySelector(".titles-container")),
            (X = document.querySelector(".titles-move-container")),
            (Y = document.querySelector(".go-btn")),
            (j = document.querySelector(".go-btn-bg-spinner")),
            (X.style.width = 320 * V.length + "px"),
            (k = document.querySelectorAll(".arrow")),
            (q = document.querySelector(".close-btn"));
          //   for (var e, t = 0, n = z.length; t < n; t++)
          //     (e = z[t]), (e.quality = t), e.addEventListener("click", l);
          l(0);

          console.log("sss", N);
        //   var particleContext = N.getContext("2d");
        //   particleContext.fillStyle = "rgba(0, 0, 0, 0)";
        //   console.log(particleContext);
          //   for (
          //     P.style.display = "block",
          //       M.set(L, {
          //         y:
          //           0.5 * window.innerHeight - L.offsetTop - 0.5 * L.offsetHeight,
          //         force3D: !0,
          //         opacity: 0,
          //       }),
          //       M.to(L, 1.5, {
          //         delay: 0.5,
          //         opacity: 1,
          //       }),
          //       M.to(L, 1, {
          //         delay: 2,
          //         y: 0,
          //         force3D: !0,
          //         ease: "easeInOutQuint",
          //       }),
          //       M.to(O, 1, {
          //         delay: 2.5,
          //         opacity: 1,
          //       }),
          //       t = 0,
          //       n = z.length;
          //     t < n;
          //     t++
          //   )
          //     (e = z[t]),
          //       M.set(e, {
          //         opacity: 0,
          //         scale: 0.001,
          //         force3D: !0,
          //       }),
          //       M.to(e, 0.5, {
          //         delay: 2.6 + 0.1 * t,
          //         opacity: 1,
          //       }),
          //       M.to(e, 1, {
          //         delay: 2.6 + 0.1 * t,
          //         scale: 1,
          //         force3D: !0,
          //         ease: "easeOutBack",
          //       });
          //   M.delayedCall(3, function () {
          //     (P.style.pointerEvents = "auto"),
          //       (L.style.cursor = "pointer"),
          //       (L.style.pointerEvents = "auto");
          //   });
        }
        function i() {
          for (var e, t, n = 0, r = V.length; n < r; n++)
            (t = V[n]),
              (e = document.createElement("div")),
              (e.innerHTML = t.title),
              X.appendChild(e);
          var o;
          //   for (n = 0, r = k.length; n < r; n++)
          //     (o = k[n]), o.addEventListener("click", d);
          setInterval(d, 3000);
          Y.addEventListener("click", u),
            Y.addEventListener("mouseenter", s),
            q.addEventListener("click", p),
            c(),
            M.set(W, {
              opacity: 0,
            }),
            M.to(W, 1, {
              delay: 3.5,
              opacity: 1,
              onComplete: v,
            }),
            M.to(I, 2.5, {
              blurRadius: 2.5,
              amount: 1,
              ease: "linear",
            });
        }
        function a() {
          window.open("http://edankwan.com/");
        }
        function u() {
          x(V[H]);
        }
        function s(e) {
          var t =
            Math.atan2(
              -(e.pageY - 0.5 * window.innerHeight),
              e.pageX - 0.5 * window.innerWidth
            ) +
            4 * Math.PI;
          (t = 3 - (~~((t / Math.PI) * 2 - 0.25) % 4)),
            (j.style.transform = "rotateZ(" + 90 * t + "deg)");
        }
        function l(qualityParam) {
          P.style.pointerEvents = "none";
          var e = (T.quality = qualityParam);
          0 === e
            ? ((T.motionBlur = !1),
              (T.particlesMotionTextureWidth = 256),
              (T.particlesMotionTextureHeight = 256),
              (A.size = 3))
            : 1 === e
            ? ((R.motionRenderTargetScale = 0.5),
              (R.maxDistance = 60),
              (T.particlesMotionTextureWidth = 256),
              (T.particlesMotionTextureHeight = 256),
              (A.size = 2.5))
            : 2 === e &&
              ((T.particlesMotionTextureWidth = 512),
              (T.particlesMotionTextureHeight = 512),
              (R.useDithering = !1),
              (R.useFloatLinear = !0),
              (A.size = 2)),
            M.to(O, 1, {
              opacity: 0,
            });
          for (var t, n, r = 0, o = z.length; r < o; r++)
            (n = e === r ? 0.25 : 0),
              (t = z[r]),
              M.to(t, 0.4, {
                delay: 0.4 + n,
                opacity: 0,
              }),
              M.to(t, 0.8, {
                delay: n,
                scale: 1e-4,
                force3D: !0,
                ease: "easeInBack",
              });
          M.delayedCall(1.5, function () {
            (P.style.display = "none"), G();
          });
        }
        function c() {
          var e = V[H];
          k[0].classList.toggle("is-active", H > 0),
            k[1].classList.toggle("is-active", H < V.length - 1),
            (B.style.backgroundColor = e.bgColor);
          for (var t = e.colors, n = 0; n < 4; n++)
            A["color" + (n + 1)].setHex(t[n]);
          var r = e.speeds;
          M.to(T, 2, {
            speed: r[0],
            ease: "linear",
          }),
            M.to(T, 2, {
              curlSize: r[1],
              ease: "linear",
            }),
            M.to(T, 2, {
              particlesOuterSpeed: r[2],
              ease: "linear",
            }),
            M.to(T, 2, {
              particlesEmittingSpeed: r[3],
              ease: "linear",
            }),
            M.to(T, 2, {
              particlesEmittingStrength: r[4],
              ease: "linear",
            }),
            M.to(T, 2, {
              particlesEmittingFriction: r[5],
              ease: "linear",
            });
        }
        function d() {
          //   var e = this.classList.contains("is-left") ? -1 : 1;
          // H = Math.round(Math.random() * 4);
          H = 0;
          //   var t = b.clamp(H + e, 0, V.length - 1);
          var t = b.clamp(H, 0, V.length - 1);
          //   if (t !== H) {
          var n = t - H;
          (H = t),
            c(),
            M.to(X, 0.5 + 0.2 * Math.abs(n), {
              x: 320 * -H,
              force3D: !0,
              ease: "easeOutQuint",
            });
          var r = 850 + 350 * Math.random(),
            o = (0.5 * Math.random() + 0.75) * Math.PI,
            i = -(0.25 * Math.random() + 0.5) * Math.PI;
          Q.set(
            r * Math.cos(i) * Math.cos(o),
            r * Math.sin(o),
            r * Math.sin(i) * Math.cos(o)
          );
          // var a = T.camera.position.distanceTo(Q);
          // M.to(T.camera.position, 1.5 + a / 1e3, {
          //   x: Q.x,
          //   y: Q.y,
          //   z: Q.z,
          //   ease: "easeInOutQuint",
          // });
          //   }
        }
        function p() {
          U && y();
        }
        function v() {
          //   (F.style.display = "block"),
          //     M.set(k[0], {
          //       x: 136,
          //       force3D: !0,
          //       opacity: 0,
          //     }),
          //     M.to(k[0], 0.8, {
          //       x: 0,
          //       force3D: !0,
          //       opacity: 1,
          //       ease: "easeInOutQuint",
          //     }),
          //     M.set(k[1], {
          //       x: -136,
          //       force3D: !0,
          //       opacity: 0,
          //     }),
          //     M.to(k[1], 0.8, {
          //       x: 0,
          //       force3D: !0,
          //       opacity: 1,
          //       ease: "easeInOutQuint",
          //     }),
          //     M.to(k[1], 0.8, {
          //       x: 0,
          //       force3D: !0,
          //       opacity: 1,
          //       ease: "easeInOutQuint",
          //     }),
          //     M.set(Y, {
          //       scale: 0.001,
          //       force3D: !0,
          //       opacity: 0,
          //     }),
          //     M.to(Y, 0.5, {
          //       opacity: 1,
          //     }),
          //     M.to(Y, 0.8, {
          //       scale: 1,
          //       force3D: !0,
          //       ease: "easeOutBack",
          //     });
        }
        function m() {
          M.to(k[0], 0.8, {
            x: 136,
            force3D: !0,
            opacity: 0,
            ease: "easeInOutQuint",
          }),
            M.to(k[1], 0.8, {
              x: -136,
              force3D: !0,
              opacity: 0,
              ease: "easeInOutQuint",
            }),
            M.to(Y, 0.5, {
              opacity: 0,
            }),
            M.to(Y, 0.8, {
              scale: 0.001,
              force3D: !0,
              ease: "easeInBack",
              onComplete: function () {
                F.style.display = "none";
              },
            });
        }
        function f() {
          (q.style.display = "block"),
            M.set(q, {
              scale: 0.001,
              force3D: !0,
              opacity: 0,
            }),
            M.to(q, 0.5, {
              opacity: 1,
            }),
            M.to(q, 0.8, {
              scale: 1,
              force3D: !0,
              ease: "easeOutBack",
            }),
            T.isMobile &&
              ((L.style.pointerEvents = "none"),
              M.to(L, 0.8, {
                scale: 0.001,
                force3D: !0,
                ease: "easeInBack",
                onComplete: function () {
                  L.style.display = "none";
                },
              }));
        }
        function h() {
          M.to(q, 0.5, {
            opacity: 0,
          }),
            M.to(q, 0.8, {
              scale: 0.001,
              force3D: !0,
              ease: "easeInBack",
              onComplete: function () {
                q.style.display = "none";
              },
            }),
            T.isMobile &&
              ((L.style.pointerEvents = "auto"),
              (L.style.display = "block"),
              M.to(L, 0.8, {
                scale: 1,
                force3D: !0,
                ease: "easeOutBack",
              }));
        }
        function x(e) {
          (C.style.pointerEvents = "none"),
            (F.style.pointerEvents = "none"),
            g(),
            M.set(I, {
              ratio: 0,
            }),
            m(),
            f(),
            Q.copy(T.camera.position).normalize().multiplyScalar(100),
            M.to(T.camera.position, 1, {
              x: Q.x,
              y: Q.y,
              z: Q.z,
              ease: "easeOutSine",
            }),
            M.to(W, 0.5, {
              opacity: 0,
            }),
            M.to(I, 1, {
              ratio: 1,
              blurRadius: 5,
              amount: 10,
              ease: "easeInOutCubic",
              onComplete: function () {
                (N.style.display = "none"),
                  (C.style.pointerEvents = "auto"),
                  (T.skipRendering = !0),
                  (U = document.createElement("iframe")),
                  B.appendChild(U),
                  (U.src = e.urls[T.qualityList[T.quality]]),
                  (U.style.backgroundColor = e.bgColor),
                  U.focus(),
                  (q.style.display = "block");
              },
            });
        }
        function g() {
          U && U.parentNode && U.parentNode.removeChild(U), (U = S);
        }
        function _(e, t) {
          F.style.top = ~~(0.5 * t) + "px";
        }
        function y() {
          (N.style.display = "block"),
            (C.style.pointerEvents = "none"),
            (T.skipRendering = !1),
            g(),
            v(),
            h(),
            Q.copy(T.camera.position).normalize().multiplyScalar(1e3),
            M.to(W, 0.5, {
              opacity: 1,
            }),
            M.to(T.camera.position, 1, {
              x: Q.x,
              y: Q.y,
              z: Q.z,
              ease: "easeOutBack",
            }),
            M.to(I, 1, {
              ratio: 0,
              blurRadius: 2.5,
              amount: 1,
              ease: "easeOutQuint",
              onComplete: function () {
                (C.style.pointerEvents = "auto"),
                  (F.style.pointerEvents = "auto");
              },
            });
        }
        var S,
          w = e(27),
          T = e(40),
          b = e(62),
          M = e(45),
          E = e(46),
          w = e(27),
          R = e(60),
          I = e(55),
          A = e(52);
        (n.preload = r), (n.init = i), (n.resize = _);
        var C,
          N,
          D,
          L,
          P,
          O,
          z,
          F,
          W,
          B,
          U,
          X,
          Y,
          j,
          k,
          q,
          G,
          V = window.demoList,
          H = 0,
          Q = new E.Vector3();
      },
      {
        27: 27,
        40: 40,
        45: 45,
        46: 46,
        52: 52,
        55: 55,
        60: 60,
        62: 62,
      },
    ],
    54: [
      function (e, t, n) {
        function r() {}
        function o(e) {
          d(
            this,
            {
              uniforms: {
                u_texture: {
                  type: "t",
                  value: u,
                },
                u_resolution: {
                  type: "v2",
                  value: l.resolution,
                },
                u_aspect: {
                  type: "f",
                  value: 1,
                },
              },
              enabled: !0,
              vertexShader: "",
              fragmentShader: "",
              isRawMaterial: !0,
              addRawShaderPrefix: !0,
            },
            e
          ),
            this.vertexShader ||
              (this.vertexShader = this.isRawMaterial ? c.vertexShader : v),
            this.addRawShaderPrefix &&
              this.isRawMaterial &&
              ((this.vertexShader = c.rawShaderPrefix + this.vertexShader),
              (this.fragmentShader = c.rawShaderPrefix + this.fragmentShader)),
            (this.material = new s[
              this.isRawMaterial ? "RawShaderMaterial" : "ShaderMaterial"
            ]({
              uniforms: this.uniforms,
              vertexShader: this.vertexShader,
              fragmentShader: this.fragmentShader,
            }));
        }
        function i(e, t) {}
        function a(e, t, n) {
          return (
            (this.uniforms.u_texture.value = t),
            (this.uniforms.u_aspect.value =
              this.uniforms.u_resolution.value.x /
              this.uniforms.u_resolution.value.y),
            l.render(this.material, n)
          );
        }
        var u,
          s = e(46),
          l = e(57),
          c = e(42),
          d = e(20);
        t.exports = r;
        var p = r.prototype;
        (p.init = o), (p.resize = i), (p.render = a);
        var v =
          "#define GLSLIFY 1\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n";
      },
      {
        20: 20,
        42: 42,
        46: 46,
        57: 57,
      },
    ],
    55: [
      function (e, t, n) {
        function r() {
          c.init.call(this, {
            uniforms: {
              u_blurTexture: {
                type: "t",
                value: i,
              },
              u_amount: {
                type: "f",
                value: 0,
              },
              u_maxLengthRatio: {
                type: "f",
                value: 0,
              },
            },
            fragmentShader:
              "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform sampler2D u_blurTexture;\nuniform float u_aspect;\nuniform float u_resolution;\n\nuniform float u_amount;\nuniform float u_maxLengthRatio;\n\nvarying vec2 v_uv;\n\nvoid main()\n{\n\n    vec3 baseColor = texture2D(u_texture, v_uv).rgb;\n    vec3 blurColor = texture2D(u_blurTexture, v_uv).rgb;\n    vec3 color = mix(baseColor, 1.0 - ((1.0 - baseColor) * (1.0 - blurColor)), u_amount);\n    // vec3 color = mix(baseColor, max(baseColor, blurColor), u_amount);\n\n    float alpha = 1.0;\n\n    vec2 pos = v_uv - 0.5;\n    pos.x *= u_aspect;\n\n    alpha = 1.0 - clamp(\n        step(-1.0, -abs(pos.y / (pos.x + u_maxLengthRatio))) +\n        step(-1.0, -abs(pos.x / (pos.y + u_maxLengthRatio))) +\n        step(-1.0, -abs(pos.y / (pos.x - u_maxLengthRatio))) +\n        step(-1.0, -abs(pos.x / (pos.y - u_maxLengthRatio))) - 3.0,\n        0.0,\n        1.0\n    );\n\n    gl_FragColor = vec4(color, alpha);\n\n}\n",
            transparent: !0,
          }),
            (d = new l.RawShaderMaterial({
              uniforms: {
                u_texture: {
                  type: "t",
                  value: i,
                },
                u_delta: {
                  type: "v2",
                  value: new l.Vector2(),
                },
              },
              vertexShader: s.vertexShader,
              fragmentShader:
                s.rawShaderPrefix +
                "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform vec2 u_delta;\n\nvarying vec2 v_uv;\n\nvoid main()\n{\n\n    vec3 color = texture2D( u_texture, v_uv ).rgb * 0.1633;\n\n    vec2 delta = u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.1531;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.1531;\n\n    delta += u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.12245;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.12245;\n\n    delta += u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.0918;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.0918;\n\n    delta += u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.051;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.051;\n\n    gl_FragColor = vec4(color, 1.0);\n\n}\n",
            }));
        }
        function o(e, t, r) {
          var o = s.getColorState();
          if (
            ((u.renderer.autoClearColor = !0),
            u.renderer.setClearColor(0, 0),
            n.amount)
          ) {
            var i = u.getRenderTarget(p),
              a = u.getRenderTarget(p);
            u.releaseRenderTarget(i, a);
            var l = n.blurRadius;
            (d.uniforms.u_texture.value = t),
              d.uniforms.u_delta.value.set(l / u.resolution.x, 0),
              s.render(d, i),
              (l = n.blurRadius),
              (d.uniforms.u_texture.value = i),
              d.uniforms.u_delta.value.set(0, l / u.resolution.y),
              s.render(d, a),
              (this.uniforms.u_blurTexture.value = a),
              (this.uniforms.u_amount.value = n.amount),
              (this.uniforms.u_maxLengthRatio.value = Math.max(
                1e-5,
                (this.uniforms.u_aspect.value + 1) * n.ratio * 0.5
              )),
              c.render.call(this, e, t, r);
          }
          s.setColorState(o);
        }
        var i,
          a = e(54),
          u = e(57),
          s = e(42),
          l = e(46),
          n = (t.exports = new a()),
          c = a.prototype;
        (n.init = r),
          (n.render = o),
          (n.blurRadius = 0),
          (n.amount = 1e-4),
          (n.ratio = 0);
        var d,
          p = 1;
      },
      {
        42: 42,
        46: 46,
        54: 54,
        57: 57,
      },
    ],
    56: [
      function (e, t, n) {
        function r() {
          l.init.call(this, {
            uniforms: {
              u_distanceTexture: {
                type: "t",
                value: i,
              },
              u_lowerBound: {
                type: "v2",
                value: n.lowerBound,
              },
              u_upperBound: {
                type: "v2",
                value: n.upperBound,
              },
              u_delta: {
                type: "v2",
                value: new s.Vector2(),
              },
              u_amount: {
                type: "f",
                value: 1,
              },
            },
            fragmentShader:
              "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform sampler2D u_distanceTexture;\n\nuniform vec2 u_resolution;\nuniform vec2 u_lowerBound;\nuniform vec2 u_upperBound;\nuniform vec2 u_delta;\nuniform float u_amount;\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n#define LOG2 1.442695\n\nvoid main() {\n\n    vec2 resolutionInverted = 1.0 / u_resolution;\n    vec2 uv = gl_FragCoord.xy * resolutionInverted;\n\n    vec2 depthInfo = texture2D( u_distanceTexture, uv ).ba;\n    float depth = depthInfo.x / depthInfo.y;\n    float fogFactor = max(smoothstep(-u_lowerBound.y, -u_lowerBound.x, -depth), smoothstep(u_upperBound.x, u_upperBound.y, depth));\n    vec2 d = u_delta * resolutionInverted * fogFactor * u_amount;\n\n    vec4 sum = vec4(0.0);\n    vec4 center = texture2D( u_texture, uv );\n    d *= length(center.xyz);\n    sum += texture2D( u_texture, ( uv - d * 4. ) ) * 0.051;\n    sum += texture2D( u_texture, ( uv - d * 3. ) ) * 0.0918;\n    sum += texture2D( u_texture, ( uv - d * 2. ) ) * 0.12245;\n    sum += texture2D( u_texture, ( uv - d * 1. ) ) * 0.1531;\n    sum += center * 0.1633;\n    sum += texture2D( u_texture, ( uv + d * 1. ) ) * 0.1531;\n    sum += texture2D( u_texture, ( uv + d * 2. ) ) * 0.12245;\n    sum += texture2D( u_texture, ( uv + d * 3. ) ) * 0.0918;\n    sum += texture2D( u_texture, ( uv + d * 4. ) ) * 0.051;\n\n    gl_FragColor = sum;\n}\n",
          });
        }
        function o(e, t, r) {
          n.amount &&
            (u.renderMotion(),
            (u.motionNeedUpdate = !1),
            n.lowerBound.x > n.lowerBound.y &&
              (n.lowerBound.x = n.lowerBound.y),
            n.upperBound.x > n.upperBound.y &&
              (n.upperBound.x = n.upperBound.y),
            (this.uniforms.u_amount.value = n.amount),
            (this.uniforms.u_distanceTexture.value = u.motionRenderTarget),
            this.uniforms.u_delta.value.set(1, 0),
            (t = l.render.call(this, e, t)),
            this.uniforms.u_delta.value.set(0, 1),
            l.render.call(this, e, t, r));
        }
        var i,
          a = (e(40), e(54)),
          u = e(60),
          s = e(46),
          n = (t.exports = new a()),
          l = a.prototype;
        (n.init = r),
          (n.render = o),
          (n.amount = 0),
          (n.lowerBound = new s.Vector2(100, 150)),
          (n.upperBound = new s.Vector2(350, 800));
      },
      {
        40: 40,
        46: 46,
        54: 54,
        60: 60,
      },
    ],
    57: [
      function (e, t, n) {
        function r(e, t, r) {
          (g = n.fromRenderTarget = f.createRenderTarget()),
            (_ = n.toRenderTarget = f.createRenderTarget()),
            (g.depthBuffer = !0),
            (g.stencilBuffer = !0),
            (_.depthBuffer = !0),
            (_.stencilBuffer = !0),
            (y = n.resolution = new m.Vector2()),
            (n.renderer = e),
            (n.scene = t),
            (n.camera = r);
        }
        function o(e, t) {
          y.set(e, t),
            g.setSize(e, t),
            _.setSize(e, t),
            (n.camera.aspect = e / t),
            n.camera.updateProjectionMatrix(),
            n.renderer.setSize(e, t);
          for (var r = 0, o = x.length; r < o; r++) x[r].resize(e, t);
        }
        function i(e) {
          return e.enabled;
        }
        function a(e) {
          var t = x.filter(i);
          if (t.length) {
            n.renderer.render(n.scene, n.camera, _), l();
            for (var r, o = 0, a = t.length; o < a; o++)
              (r = t[o]), r.render(e, g, o === a - 1);
          } else n.renderer.render(n.scene, n.camera);
        }
        function u(e, t, r) {
          (t = t || n.scene),
            (r = r || n.camera),
            e ? n.renderer.render(t, r, e) : n.renderer.render(t, r);
        }
        function s(e, t) {
          return f.render(e, t ? v : _), l(), g;
        }
        function l() {
          var e = _;
          (_ = n.toRenderTarget = g), (g = n.fromRenderTarget = e);
        }
        function c(e, t) {
          (e = e || 0), (t = +(t || 0));
          var n,
            r = y.x >> e,
            o = y.y >> e,
            i = e + "_" + t,
            a = p(i);
          return (
            a.length
              ? ((n = a.pop()), h(n, T))
              : ((n = f.createRenderTarget(
                  r,
                  o,
                  t ? m.RGBAFormat : m.RGBFormat
                )),
                (n._listId = i),
                (w[i] = w[i] || 0)),
            w[i]++,
            (n.width === r && n.height === o) || n.setSize(r, o),
            n
          );
        }
        function d(e) {
          for (
            var t, n, r, o, i, a = arguments, u = 0, s = a.length;
            u < s;
            u++
          ) {
            for (
              e = a[u],
                o = e._listId,
                i = p(o),
                t = !1,
                w[o]--,
                n = 0,
                r = i.length;
              n < r;
              n++
            )
              if (i[n] === e) {
                t = !0;
                break;
              }
            t || i.push(e);
          }
        }
        function p(e) {
          return S[e] || (S[e] = []);
        }
        var v,
          m = e(46),
          f = e(42),
          h = e(20);
        (n.init = r),
          (n.resize = o),
          (n.renderQueue = a),
          (n.renderScene = u),
          (n.render = s),
          (n.swapRenderTarget = l),
          (n.getRenderTarget = c),
          (n.releaseRenderTarget = d),
          (n.resolution = v);
        var x = (n.queue = []),
          g = (n.fromRenderTarget = v),
          _ = (n.toRenderTarget = v),
          y = (n.resolution = v),
          S = {},
          w = {},
          T = {
            depthBuffer: !1,
            texture: {
              generateMipmaps: !1,
            },
          };
        (n.renderer = v), (n.scene = v), (n.camera = v);
      },
      {
        20: 20,
        42: 42,
        46: 46,
      },
    ],
    58: [
      function (e, t, n) {
        function r(e) {
          var t = e
              ? "#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_resolution;\n\nvarying vec2 v_uv;\n\n//To save 9 dependent texture reads, you can compute\n//these in the vertex shader and use the optimized\n//frag.glsl function in your frag shader. \n\n//This is best suited for mobile devices, like iOS.\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n\t\t\tout vec2 v_rgbNW, out vec2 v_rgbNE,\n\t\t\tout vec2 v_rgbSW, out vec2 v_rgbSE,\n\t\t\tout vec2 v_rgbM) {\n\tvec2 inverseVP = 1.0 / resolution.xy;\n\tv_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n\tv_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n\tv_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n\tv_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n\tv_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main() {\n\n   vec2 fragCoord = uv * u_resolution;\n   texcoords(fragCoord, u_resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n\n}\n"
              : "",
            n = e
              ? '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec2 u_resolution;\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n    vec2 fragCoord = v_uv * u_resolution;\n\n    gl_FragColor = fxaa(u_texture, fragCoord, u_resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n'
              : '#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform sampler2D u_texture;\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n//To save 9 dependent texture reads, you can compute\n//these in the vertex shader and use the optimized\n//frag.glsl function in your frag shader. \n\n//This is best suited for mobile devices, like iOS.\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n\t\t\tout vec2 v_rgbNW, out vec2 v_rgbNE,\n\t\t\tout vec2 v_rgbSW, out vec2 v_rgbSE,\n\t\t\tout vec2 v_rgbM) {\n\tvec2 inverseVP = 1.0 / resolution.xy;\n\tv_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n\tv_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n\tv_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n\tv_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n\tv_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvec4 apply(sampler2D tex, vec2 fragCoord, vec2 resolution) {\n\tmediump vec2 v_rgbNW;\n\tmediump vec2 v_rgbNE;\n\tmediump vec2 v_rgbSW;\n\tmediump vec2 v_rgbSE;\n\tmediump vec2 v_rgbM;\n\n\t//compute the texture coords\n\ttexcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\t\n\t//compute FXAA\n\treturn fxaa(tex, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n\nvoid main() {\n    gl_FragColor = apply(u_texture, gl_FragCoord.xy, u_resolution);\n}\n';
          i.init.call(this, {
            uniforms: {},
            vertexShader: t,
            fragmentShader: n,
          });
        }
        var o = e(54);
        t.exports = new o();
        var i = o.prototype;
        t.exports.init = r;
      },
      {
        54: 54,
      },
    ],
    59: [
      function (e, t, n) {
        function r(e) {
          e = e || {};
          var t = e.uniforms || {};
          o.ShaderMaterial.call(
            this,
            a(
              {
                uniforms: i(t, {
                  u_prevModelViewMatrix: {
                    type: "m4",
                    value: new o.Matrix4(),
                  },
                  u_motionMultiplier: {
                    type: "f",
                    value: 1,
                  },
                }),
                vertexShader:
                  "#define GLSLIFY 1\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\nuniform mat4 u_prevModelViewMatrix;\n\nvarying vec2 v_motion;\n\nvoid main() {\n\n    #include <skinbase_vertex>\n    #include <begin_vertex>\n\n    #include <morphtarget_vertex>\n    #include <skinning_vertex>\n\n    vec4 pos = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );\n    vec4 prevPos = projectionMatrix * u_prevModelViewMatrix * vec4( transformed, 1.0 );\n    gl_Position = pos;\n    v_motion = (pos.xy / pos.w - prevPos.xy / prevPos.w) * 0.5;\n\n}\n",
                fragmentShader:
                  "#define GLSLIFY 1\nuniform float u_motionMultiplier;\n\nvarying vec2 v_motion;\n\nvoid main() {\n\n        gl_FragColor = vec4( v_motion * u_motionMultiplier, gl_FragCoord.z, 1.0 );\n\n}\n",
                blending: o.NoBlending,
              },
              e
            )
          );
        }
        var o = e(46),
          i = e(14),
          a = e(21);
        ((r.prototype = Object.create(o.ShaderMaterial.prototype)).constructor =
          r),
          (t.exports = r);
      },
      {
        14: 14,
        21: 21,
        46: 46,
      },
    ],
    60: [
      function (e, t, n) {
        function r() {
          var e = n.useFloatLinear ? f.LinearFilter : f.NearestFilter,
            t = v.renderer.getContext();
          (t.getExtension("OES_texture_float") &&
            t.getExtension("OES_texture_float_linear")) ||
            (e = f.NearestFilter),
            (E = n.motionRenderTarget =
              m.createRenderTarget(1, 1, f.RGBAFormat, f.FloatType, e, e)),
            (x = m.createRenderTarget(1, 1, f.RGBAFormat, f.FloatType, e, e)),
            (_ = new f.Camera()),
            (_.position.z = 1),
            (y = new f.Scene()),
            h.init.call(this, {
              uniforms: {
                u_lineAlphaMultiplier: {
                  type: "f",
                  value: 1,
                },
                u_linesTexture: {
                  type: "t",
                  value: x,
                },
              },
              fragmentShader:
                "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform sampler2D u_linesTexture;\nuniform float u_lineAlphaMultiplier;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n    vec3 base = texture2D( u_texture, v_uv.xy ).rgb;\n    vec4 lines = texture2D( u_linesTexture, v_uv.xy );\n\n    vec3 color = (base + lines.rgb * u_lineAlphaMultiplier) / (lines.a * u_lineAlphaMultiplier + 1.0);\n\n    gl_FragColor = vec4( color, 1.0 );\n\n}\n",
              enabled: d.motionBlur,
            }),
            (S = []),
            (T = new f.BufferGeometry()),
            (b = new f.RawShaderMaterial({
              uniforms: {
                u_texture: {
                  type: "t",
                  value: c,
                },
                u_motionTexture: {
                  type: "t",
                  value: E,
                },
                u_resolution: {
                  type: "v2",
                  value: v.resolution,
                },
                u_maxDistance: {
                  type: "f",
                  value: 1,
                },
                u_jitter: {
                  type: "f",
                  value: 0.3,
                },
                u_fadeStrength: {
                  type: "f",
                  value: 1,
                },
                u_motionMultiplier: {
                  type: "f",
                  value: 1,
                },
                u_depthTest: {
                  type: "f",
                  value: 0,
                },
                u_opacity: {
                  type: "f",
                  value: 1,
                },
                u_leaning: {
                  type: "f",
                  value: 0.5,
                },
              },
              vertexShader:
                m.rawShaderPrefix +
                "#define GLSLIFY 1\nattribute vec3 position;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_motionTexture;\n\nuniform vec2 u_resolution;\nuniform float u_maxDistance;\nuniform float u_jitter;\nuniform float u_motionMultiplier;\nuniform float u_leaning;\n\nvarying vec3 v_color;\nvarying float v_ratio;\nvarying float v_depth;\nvarying vec2 v_uv;\n\nvoid main() {\n\n    v_color = texture2D( u_texture, position.xy ).rgb;\n\n    float side = step(0.001, position.z);\n\n    v_ratio = side;\n\n    vec3 motion = texture2D( u_motionTexture, position.xy ).xyz;\n    v_depth = motion.z;\n\n    vec2 offset = motion.xy * u_resolution * u_motionMultiplier;\n    float offsetDistance = length(offset);\n    if(offsetDistance > u_maxDistance) {\n        offset = normalize(offset) * u_maxDistance;\n    }\n\n    vec2 pos = position.xy * 2.0 - 1.0 - offset / u_resolution * 2.0 * (1.0 - position.z * u_jitter) * (side - u_leaning);\n    v_uv = pos * 0.5 + 0.5;\n\n    gl_Position = vec4( pos, 0.0, 1.0 );\n\n}\n",
              fragmentShader:
                m.rawShaderPrefix +
                "#define GLSLIFY 1\nuniform sampler2D u_motionTexture;\nuniform float u_depthTest;\nuniform float u_opacity;\nuniform float u_leaning;\nuniform float u_fadeStrength;\nuniform float u_depthBias;\nuniform float u_useDepthWeight;\n\nvarying vec3 v_color;\nvarying float v_ratio;\nvarying float v_depth;\nvarying vec2 v_uv;\n\nvoid main() {\n\n    vec3 motion = texture2D( u_motionTexture, v_uv ).xyz;\n\n    float alpha = smoothstep(0.0, u_leaning, v_ratio) * (1.0 - smoothstep (u_leaning, 1.0, v_ratio));\n\n    alpha = pow(alpha, u_fadeStrength) * u_opacity;\n\n    if(alpha < 0.00392157) {\n        discard;\n    }\n\n    float threshold = v_depth * step(0.0001, motion.z);\n    alpha *= max(1.0 - u_depthTest, smoothstep(threshold - u_depthBias, threshold, motion.z));\n\n    gl_FragColor = vec4( v_color * alpha, alpha );\n\n}\n",
              blending: f.CustomBlending,
              blendEquation: f.AddEquation,
              blendSrc: f.OneFactor,
              blendDst: f.OneFactor,
              blendEquationAlpha: f.AddEquation,
              blendSrcAlpha: f.OneFactor,
              blendDstAlpha: f.OneFactor,
              depthTest: !1,
              depthWrite: !1,
              transparent: !0,
            })),
            (g = new f.LineSegments(T, b)),
            y.add(g);
        }
        function o(e, t) {
          var r = ~~(e * n.motionRenderTargetScale),
            o = ~~(t * n.motionRenderTargetScale);
          E.setSize(r, o);
          var a = ~~(e * n.linesRenderTargetScale),
            u = ~~(t * n.linesRenderTargetScale);
          x.setSize(a, u);
          var s,
            l = !n.useDithering,
            c = l ? a * u : i(a, u);
          c > S.length / 6 &&
            ((S = new Float32Array(6 * c)),
            (w = new f.BufferAttribute(S, 3)),
            T.removeAttribute("position"),
            T.addAttribute("position", w));
          var d,
            p,
            v = 0,
            m = a * u;
          for (s = 0; s < m; s++)
            (d = s % a),
              (p = ~~(s / a)),
              (l || (d + (1 & p)) & 1) &&
                ((S[v + 0] = S[v + 3] = (d + 0.5) / a),
                (S[v + 1] = S[v + 4] = (p + 0.5) / u),
                (S[v + 2] = 0),
                (S[v + 5] = 0.001 + 0.999 * Math.random()),
                (v += 6));
          (w.needsUpdate = !0),
            (T.drawRange.count = 2 * c),
            (M = n.useDithering);
        }
        function i(e, t) {
          return 1 & e && 1 & t
            ? (((e - 1) * (t - 1)) >> 1) + (e >> 1) + (t >> 1)
            : (e * t) >> 1;
        }
        function a() {
          var e = m.getColorState();
          v.renderer.setClearColor(0, 1),
            v.renderer.clearTarget(E, !0),
            v.scene.traverseVisible(s),
            v.renderScene(E);
          for (var t = 0, n = R.length; t < n; t++) l(R[t]);
          (R = []), m.setColorState(e);
        }
        function u(e, t, r) {
          M !== n.useDithering && o(v.resolution.x, v.resolution.y);
          var i = m.getColorState();
          n.motionNeedUpdate && a(),
            (b.uniforms.u_maxDistance.value = n.maxDistance),
            (b.uniforms.u_jitter.value = n.jitter),
            (b.uniforms.u_fadeStrength.value = n.fadeStrength),
            (b.uniforms.u_motionMultiplier.value = n.motionMultiplier),
            (b.uniforms.u_depthTest.value = n.depthTest),
            (b.uniforms.u_opacity.value = n.opacity),
            (b.uniforms.u_leaning.value = Math.max(
              0.001,
              Math.min(0.999, n.leaning)
            )),
            (b.uniforms.u_texture.value = t),
            v.renderer.setClearColor(0, 0),
            v.renderer.clearTarget(x, !0),
            v.renderer.render(y, _, x),
            m.setColorState(i),
            (this.uniforms.u_lineAlphaMultiplier.value = 1 + n.useDithering),
            h.render.call(this, e, t, r),
            (n.motionNeedUpdate = !0);
        }
        function s(e) {
          e.motionMaterial
            ? ((e._tmpMaterial = e.material), (e.material = e.motionMaterial))
            : e.material && (e.visible = !1),
            R.push(e);
        }
        function l(e) {
          e.motionMaterial
            ? ((e.material = e._tmpMaterial),
              (e._tmpMaterial = c),
              n.skipMatrixUpdate ||
                e.motionMaterial.uniforms.u_prevModelViewMatrix.value.copy(
                  e.modelViewMatrix
                ))
            : (e.visible = !0);
        }
        var c,
          d = e(40),
          p = e(54),
          v = e(57),
          m = e(42),
          f = e(46),
          n = (t.exports = new p()),
          h = p.prototype;
        (n.init = r),
          (n.resize = o),
          (n.renderMotion = a),
          (n.render = u),
          (n.skipMatrixUpdate = !1),
          (n.depthTest = !1),
          (n.jitter = 0),
          (n.fadeStrength = 2),
          (n.motionMultiplier = 6),
          (n.maxDistance = 120),
          (n.opacity = 0.3),
          (n.leaning = 0.05),
          (n.useDithering = !0),
          (n.motionNeedUpdate = !0),
          (n.useFloatLinear = !1),
          (n.motionRenderTargetScale = 1),
          (n.linesRenderTargetScale = 0.5);
        var x,
          g,
          _,
          y,
          S,
          w,
          T,
          b,
          M,
          E = (n.motionRenderTarget = c),
          R = [];
      },
      {
        40: 40,
        42: 42,
        46: 46,
        54: 54,
        57: 57,
      },
    ],
    61: [
      function (e, t, n) {
        function r(e, t, n) {
          (d = e),
            (p = t),
            (v = v),
            a.init(e, t, n),
            u.init(),
            l.init(),
            s.init(),
            a.queue.push(u),
            a.queue.push(l),
            a.queue.push(s);
        }
        function o(e, t) {
          a.resize(e, t);
        }
        function i(e) {
          a.renderQueue(e), n.visualizeTarget && c.copy(n.visualizeTarget);
        }
        var a = (e(40), e(57)),
          u = e(58),
          s = e(55),
          l = e(60),
          c = e(42);
        (n.init = r),
          (n.resize = o),
          (n.render = i),
          (n.visualizeTarget = void 0);
        var d, p, v;
      },
      {
        40: 40,
        42: 42,
        55: 55,
        57: 57,
        58: 58,
        60: 60,
      },
    ],
    62: [
      function (e, t, n) {
        function r(e, t) {
          return t < e ? 0 : 1;
        }
        function o(e, t, n) {
          return (n = u(e, t, n)) * n(3 - 2 * n);
        }
        function i(e, t, n) {
          return e < t ? t : e > n ? n : e;
        }
        function a(e, t, n) {
          return n <= 0 ? e : n >= 1 ? t : e + (t - e) * n;
        }
        function u(e, t, n) {
          return n <= e ? 0 : n >= t ? 1 : (n - e) / (t - e);
        }
        function s(e, t, n) {
          return e + (t - e) * n;
        }
        function l(e, t, n) {
          return (n - e) / (t - e);
        }
        function c(e) {
          return e - Math.floor(e);
        }
        function d(e) {
          return c(43758.5453123 * Math.sin(e));
        }
        function p(e, t) {
          return c(43758.5453 * Math.sin(12.9898 * e + 4.1414 * t));
        }
        function v(e) {
          return e ? (e < 0 ? -1 : 1) : 0;
        }
        for (var m in Math) n[m] = Math[m];
        (n.step = r),
          (n.smoothstep = o),
          (n.clamp = i),
          (n.mix = n.lerp = a),
          (n.unMix = n.unLerp = u),
          (n.unClampedMix = n.unClampedLerp = s),
          (n.upClampedUnMix = n.unClampedUnLerp = l),
          (n.fract = c),
          (n.hash = d),
          (n.hash2 = p),
          (n.sign = v);
        var f = Math.PI;
        n.TAU = 2 * f;
      },
      {},
    ],
  },
  {},
  [44]
);
