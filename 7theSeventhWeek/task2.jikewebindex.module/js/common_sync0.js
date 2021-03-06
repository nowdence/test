! function(root) {
	function loadJs(e, t) {
		var n = d.createElement("script"),
			a = !1,
			r = function() {
				a || (a = !0, t && t())
			};
		n.setAttribute("src", e), n.setAttribute("type", "text/javascript"), n.onload = r, n.onreadystatechange = r, head.appendChild(n)
	}

	function loadCss(e, t) {
		var n = d.createElement("link");
		n.type = "text/css", n.rel = "stylesheet", n.href = e, "msie" === browser ? n.onreadystatechange = function() {
			/loaded|complete/.test(n.readyState) && t()
		} : "opera" === browser ? n.onload = t : ! function() {
			try {
				n.sheet.cssRule
			} catch (e) {
				return void setTimeout(arguments.callee, 20)
			}
			t()
		}(), head.appendChild(n)
	}

	function globalEval(code) {
		var script;
		code = code.replace(/^\s+/, "").replace(/\s+$/, "");
	}

	function appendStyle(e, t) {
		t = t || head;
		var n = document.createElement("style");
		return n.innerHTML = e, t.appendChild(n), n
	}

	function ajax(e, t, n) {
		var a = new(window.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");
		a.onreadystatechange = function() {
			4 == this.readyState && t(this.responseText)
		}, a.open(n ? "POST" : "GET", e + "&t=" + ~~(1e6 * Math.random()), !0), n && a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.send(n)
	}

	function mixin(e, t) {
		if (e && t)
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		return e
	}
	var d = document,
		head = d.getElementsByTagName("head")[0],
		browser = function() {
			var e = navigator.userAgent.toLowerCase(),
				t = /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || !/compatible/.test(e) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || [];
			return t[1]
		}(),
		Util = {
			loadJs: loadJs,
			loadCss: loadCss,
			appendStyle: appendStyle,
			globalEval: globalEval,
			ajax: ajax,
			mixin: mixin
		};
	root.BigPipeUtil = Util
}(this),
function(e) {
	function t(e, t, a) {
		var r = [];
		return n(e, function(e) {
			!e || t && e.e !== t || a && e.cb !== a && e.cb._cb !== a || r.push(e)
		}), r
	}

	function n(e, t) {
		for (var n, a = 0, r = e.length; r > a; a++) n = e[a], t.call(n, n, a)
	}

	function a(e, t) {
		for (var n, a = -1, r = e.length; ++a < r && (n = e[a], n.cb.apply(n.ctx, t) !== !1););
	}
	var r, i = e.BigPipeUtil,
		o = [].slice;
	r = {
		on: function(e, t) {
			var n;
			return n = this._events || (this._events = []), n.push({
				e: e,
				cb: t,
				id: n.length,
				ctx: this
			}), this
		},
		once: function(e, t) {
			var n, a = this;
			return n = function() {
				return a.off(e, n), t.apply(a, arguments)
			}, n._cb = t, a.on(e, n)
		},
		off: function(e, a) {
			var r = this._events;
			return e || a ? (n(t(r, e, a), function(e) {
				delete r[e.id]
			}), this) : (this._events = [], this)
		},
		trigger: function(e) {
			var n, r;
			return this._events && e ? (n = o.call(arguments, 1), r = t(this._events, e), a(r, n)) : this
		}
	}, e.BigPipeEvent = i.mixin({
		mixto: function(e) {
			return i.mixin(e, r)
		}
	}, r)
}(this),
function(e) {
	var t = e.BigPipeUtil,
		n = e.BigPipeEvent,
		a = function() {
			function e(e, n) {
				var a = function() {
						var t = i.getNeedLoad(e.css) || [];
						t && t.length ? LazyLoad.css(t, function() {
							i.recordLoaded(t), r()
						}) : r()
					},
					r = function() {
						var a, r, i, o, c, s = [];
						if (e.styles && e.styles.length)
							for (a = 0, r = e.styles.length; r > a; a++) o = t.appendStyle(e.styles[a]), s.push(o);
						i = e.container && "string" == typeof e.container ? document.getElementById(e.container) : e.container || document.getElementById(e.id), i.innerHTML = e.html, c = document.getElementById(e.container);
						for (var a = 0, r = s.length; r > a; a++) c.appendChild(s[a]);
						n()
					},
					o = function(n) {
						var a = i.getNeedLoad(e.js) || [],
							r = a && a.length,
							o = function() {
								var a, r;
								if (e.scripts && e.scripts.length)
									for (a = 0, r = e.scripts.length; r > a; a++) t.globalEval(e.scripts[a]);
								n && n(e)
							};
						return r ? void LazyLoad.js(a, function() {
							i.recordLoaded(a), o()
						}) : void(o && o())
					};
				return {
					loadCss: a,
					loadJs: o
				}
			}
			var n = 0,
				o = [];
			return {
				onPageletArrive: function(t) {
					this.trigger("pageletarrive", t);
					var r = e(t, function() {
						var e;
						if (!--n)
							for (; e = o.shift();) a.trigger("pageletinsert", r, t), e.loadJs(function() {
								a.trigger("pageletdone", r, t)
							})
					});
					o.push(r), n++, r.loadCss()
				},
				load: function(e) {
					var n, i, o, c, s, l, d, u, p, f = [],
						g = location.href;
					for (e instanceof Array ? n = {
							pagelets: e
						} : (n = "string" == typeof e ? {
							pagelets: e
						} : e, e = n.pagelets || n.pagelet, "string" == typeof e && (e = e.split(/\s*,\s*/))), s = e.length, i = s - 1; i >= 0; i--) o = e[i], f.push("pagelets[]=" + o), p = n.container && n.container[o] || n.container, p && a.once("pageletarrive", function(e) {
						e.container = p
					});
					u = n.param ? "&" + n.param : "", l = location.search, l = l ? l + "&" : "?", d = (n.url || "") + l + f.join("&") + u, c = n.cb && a.on("pageletdone", function() {
						--s || (a.off("pageletdone", arguments.callee), n.cb && n.cb())
					});
					var h;
					r.isCacheAvailable(d) ? (h = r.getPageletsCache(d), t.globalEval(h)) : t.ajax(d, function(e) {
						g === location.href && (t.globalEval(e), r.addPageletsCache(d, e))
					})
				},
				asyncLoad: function() {}
			}
		}(),
		r = function() {
			function e(e, t) {
				a[e] = {
					data: t,
					time: Date.now()
				}
			}

			function t(e) {
				return a[e] ? a[e].data : void 0
			}

			function n(e) {
				return !!a[e] && Date.now() - a[e].time <= r
			}
			var a = {},
				r = 18e5;
			return {
				addPageletsCache: e,
				getPageletsCache: t,
				isCacheAvailable: n
			}
		}(),
		i = function() {
			function e(e) {
				var t = e;
				"string" == typeof t && (t = [t]);
				for (var r = 0; r < t.length; r++) n[t[r]] = a
			}

			function t(e) {
				var t = [];
				if ("string" == typeof e) t = [e];
				else if ("[object Array]" === Object.prototype.toString.call(e))
					for (var r = 0; r < e.length; r++) n[e[r]] !== a && t.push(e[r]);
				return 0 === t.length && (t = null), t
			}
			var n = {},
				a = 1;
			return {
				recordLoaded: e,
				getNeedLoad: t
			}
		}();
	n.mixto(a), window.BigPipe = a
}(this);;
var require, define;
! function(r) {
	function e(r, e) {
		var u = a[r] || (a[r] = []);
		u.push(e);
		var o = n[r] || {},
			p = o.pkg ? i[o.pkg].url : o.url || r;
		if (!(p in f)) {
			f[p] = !0;
			var s = document.createElement("script");
			s.type = "text/javascript", s.src = p, t.appendChild(s)
		}
	}
	var n, i, t = document.getElementsByTagName("head")[0],
		a = {},
		u = {},
		o = {},
		f = {};
	define = function(r, e) {
		u[r] = e;
		var n = a[r];
		if (n) {
			for (var i = n.length - 1; i >= 0; --i) n[i]();
			delete a[r]
		}
	}, require = function(r) {
		r = require.alias(r);
		var e = o[r];
		if (e) return e.exports;
		var n = u[r];
		if (!n) throw Error("Cannot find module `" + r + "`");
		e = o[r] = {
			exports: {}
		};
		var i = "function" == typeof n ? n.apply(e, [require, e.exports, e]) : n;
		return i && (e.exports = i), e.exports
	}, require.async = function(i, t) {
		function a(r) {
			for (var i = r.length - 1; i >= 0; --i) {
				var t = r[i];
				if (!(t in u || t in p)) {
					p[t] = !0, s++, e(t, o);
					var f = n[t];
					f && "deps" in f && a(f.deps)
				}
			}
		}

		function o() {
			if (0 == s--) {
				var e, n, a = [];
				for (e = 0, n = i.length; n > e; ++e) a[e] = require(i[e]);
				t && t.apply(r, a)
			}
		}
		"string" == typeof i && (i = [i]);
		for (var f = i.length - 1; f >= 0; --f) i[f] = require.alias(i[f]);
		var p = {},
			s = 0;
		a(i), o()
	}, require.resourceMap = function(r) {
		n = r.res || {}, i = r.pkg || {}
	}, require.alias = function(r) {
		return r
	}, define.amd = {
		jQuery: !0,
		version: "1.0.0"
	}
}(this);;
! function(e) {
	var t = 0,
		n = {
			init: function() {},
			pop: function(t) {
				function n() {
					null !== l.popFunc && l.popFunc();
					var t = "<div id='blacklayer'></div>";
					e("body").append(t);
					var n = e(document).height();
					e("#blacklayer").css({
						zIndex: l.zIndex - 10,
						background: "#000",
						opacity: l.opacity,
						position: "absolute",
						left: 0,
						top: 0,
						width: "100%",
						height: n
					}), e(".popclose").bind("click", function() {
						r = 0, e("#blacklayer").remove(), null === l.popHtml ? e(l.popId).hide() : e(l.popId).remove(), null != l.closePop && l.closePop()
					})
				}

				function o(t, n, i) {
					return 0 === r ? !1 : void(_jumpfunc = window.setTimeout(function() {
						if (t--, t > 0) {
							if (1 == a) return !1;
							e(n).html(t + "秒"), o(t, n, i)
						} else null == i ? (e("#blacklayer").remove(), e(l.popId).remove()) : document.location = i
					}, 1e3))
				}
				var i = e(window).height(),
					s = e(window).width(),
					a = 0,
					r = 1,
					l = {
						width: 100,
						height: 100,
						zIndex: 9999,
						poparent: "body",
						opacity: .5,
						popId: null,
						popHtml: null,
						popFunc: null,
						time: null,
						timeId: null,
						url: null,
						closePop: null
					};
				t && e.extend(l, t);
				var c, p = (s - l.width) / 2;
				return null === l.popHtml ? this.each(function() {
					var t = e(this);
					"auto" == l.height && (l.height = t.height()), c = (i - l.height) / 2, t.show(), t.css({
						width: l.width,
						height: l.height,
						zIndex: l.zIndex,
						top: c,
						left: p,
						position: "fixed"
					}), n(), null !== l.time && o(l.time, l.timeId, l.url)
				}) : (null !== l.popHtml && (e(l.poparent).append(l.popHtml), "auto" == l.height && (l.height = e(l.popId).height()), c = (i - l.height) / 2, e(l.popId).css({
					width: l.width,
					height: l.height,
					zIndex: l.zIndex,
					top: c,
					left: p,
					position: "fixed"
				}), n()), void(null !== l.time && o(l.time, l.timeId, l.url)))
			},
			tag: function(t) {
				var n = {
					type: "click",
					selected: "on",
					contentClass: ".content",
					func: null
				};
				return t && e.extend(n, t), "click" != n.type && "mouseover" != n.type ? !1 : (e(this).eq(0).addClass(n.selected), this.each(function() {
					function t() {
						var t = o.index();
						o.siblings().removeClass(n.selected), o.addClass(n.selected), e(n.contentClass).hide(), e(n.contentClass).eq(t).show(), null != n.func && n.func()
					}
					var o = e(this);
					e(n.contentClass).hide(), e(n.contentClass).eq(0).show(), o.bind(n.type, t)
				}))
			},
			imgmove: function(n) {
				function o() {
					var n = e(i.oneEle).size(),
						o = n * i.oneWidth,
						s = o / i.boxWidth;
					s % i.boxWidth > 0;
					var a = e(i.oneEle).parent();
					if (1 == i.loop) {
						e(i.oneEle).parent().width(o).css("left", -i.oneWidth);
						var a = e(i.oneEle).parent(),
							r = e(i.oneEle).last();
						a.prepend(r.clone()), r.remove()
					} else e(i.oneEle).parent().width(o);
					e(i.prev).click(function() {
						if (1 == i.loop) {
							var n = e(i.oneEle).last();
							TweenMax.to(a, 1, {
								left: 0,
								onComplete: function() {
									a.prepend(n.clone()), a.css("left", -i.oneWidth), e(i.oneEle).last().remove()
								},
								ease: Quart.easeOut
							})
						} else t > 0 && (t--, TweenMax.to(a, 1, {
							left: -i.boxWidth * t,
							ease: Quart.easeOut
						}))
					}), e(i.next).click(function() {
						1 == i.loop ? TweenMax.to(a, .4, {
							left: -i.oneWidth,
							onComplete: function() {
								a.css("left", "0px");
								var t = e(i.oneEle).slice(0, 1);
								a.append(t.clone()), e(i.oneEle).slice(0, 1).remove(), console.log("ok")
							},
							ease: Quart.easeOut
						}) : s - 1 > t && (t++, TweenMax.to(a, 1, {
							left: -i.boxWidth * t,
							ease: Quart.easeOut
						}))
					})
				}
				var i = {
					oneEle: null,
					oneWidth: null,
					loop: !1,
					boxWidth: null,
					prev: null,
					next: null
				};
				n && e.extend(i, n), o()
			}
		};
	e.fn.tooltip = function(t) {
		return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.tooltip") : n.init.apply(this, arguments)
	}
}(jQuery);
var JK_lock = "open",
	JKXY = JKXY || {};
JKXY = {
	init: function() {
		this.gotop(), this.bindElem(), this.TopSearch()
	},
	bindElem: function() {
		$("#headsearch .search-btn").bind("click", JKXY.TopSearch), $("#user-name,.user-center,#user-name p").bind("mouseover", this.userContent), $(".lesson-list li").hover(JKXY.lessonHover, JKXY.lessonOut), $(".mod-tips .close").on("click", function() {
			$(this).parents(".mod-tips").remove()
		})
	},
	userContent: function() {
		$(".user-center").show(), $(".jiaotou").addClass("rotate"), JKXY.stopEventBubble(), $(document).bind("mouseover", function() {
			$(".user-center").hide(), $(".jiaotou").removeClass("rotate")
		})
	},
	Cookie: {
		cokpre: "sso_",
		get: function(e) {
			for (var t = this.cokpre + e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
				for (var i = n[o];
					" " == i.charAt(0);) i = i.substring(1, i.length);
				if (0 == i.indexOf(t)) {
					var s;
					try {
						s = unescape(i.substring(t.length, i.length))
					} catch (a) {
						s = unescape(i.substring(t.length, i.length))
					}
					return s
				}
			}
			return null
		},
		set: function(e, t, n, o, i, s) {
			var a;
			if ("number" == typeof n) {
				if (n > 0) {
					var r = new Date;
					r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), a = r.toGMTString()
				}
			} else a = "String" == typeof n ? n : !1;
			document.cookie = this.cokpre + e + "=" + escape(t) + (a ? ";expires=" + a : "") + (o ? ";path=" + o : "") + (i ? ";domain=" + i : "") + (s ? ";secure" : "")
		},
		del: function(e, t, n, o) {
			JKXY.Cookie.set(e, "", -1, t, n, o)
		}
	},
	stopEventBubble: function() {
		function e() {
			if (window.event) return window.event;
			for (func = e.caller; null != func;) {
				var t = func.arguments[0];
				if (t && (t.constructor == Event || t.constructor == MouseEvent || t.constructor == KeyboardEvent || "object" == typeof t && t.preventDefault && t.stopPropagation)) return t;
				func = func.caller
			}
			return null
		}
		var t = e();
		window.event ? t.cancelBubble = !0 : t.preventDefault && t.stopPropagation()
	},
	lessonHover: function() {
		$(this).find(".jd-line").hide();
		var e = $(this).find(".cricle"),
			t = $(this).attr("deg");
		if (1 != $(this).attr("stop")) {
			var e = $(this).find(".cricle"),
				t = $(this).attr("deg");
			new C(e, t), $(this).attr("stop", 1)
		}
		var n = $(this).find(".lessonplay");
		TweenMax.to(n, .6, {
			opacity: 1,
			ease: Quart.easeOut
		});
		var o = $(this).find(".cancel-favorites");
		o.length > 0 && o.attr("class").indexOf("cancel-stop") < 0 && o.show();
		var i = $(this).find(".lesson-shoucang");
		if (i.length > 0 && i.show(), "close" === JK_lock) return !1;
		var s = $(this).children(".lesson-infor"),
			a = $(this).find(".learn-number"),
			r = $(this).find(".zhongji");
		a.show(), r.show(), s.addClass("lesson-hover"), $(this).find(".lessonicon-box").css("bottom", "-2px"), TweenMax.to(s, .6, {
			height: 175,
			ease: Quart.easeOut
		});
		var l = s.find("p");
		TweenMax.to(l, .15, {
			display: "block",
			height: 52,
			opacity: 1,
			ease: Linear.easeOut
		})
	},
	lessonOut: function(e, t) {
		var t = "object" == typeof t ? t : $(this);
		t.find(".jd-line").show();
		var n = t.find(".lessonplay");
		TweenMax.to(n, .6, {
			opacity: 0,
			ease: Quart.easeNone
		});
		var o = t.find(".cancel-favorites");
		o.length > 0 && o.attr("class").indexOf("cancel-stop") < 0 && o.hide();
		var i = t.find(".lesson-shoucang");
		if (i.length > 0 && i.attr("class").indexOf("ysc") < 0 && i.hide(), "close" === JK_lock) return !1;
		var s = t.children(".lesson-infor"),
			a = t.find(".learn-number"),
			r = t.find(".zhongji");
		a.hide(), r.hide(), s.removeClass("lesson-hover"), t.find(".lessonicon-box").css("bottom", "4px"), TweenMax.to(s, .6, {
			height: 88,
			ease: Quart.easeNone
		});
		var l = s.find("p");
		TweenMax.to(l, .3, {
			height: 0,
			opacity: 0,
			display: "none",
			ease: Linear.easeNone
		})
	},
	lessonNavHover: function() {
		$(".lesson-nav dd").mousemove(function() {
			var e = $(this).find(".cateLists-li a");
			TweenMax.to(e, .4, {
				marginLeft: "10px",
				ease: Quart.easeOut
			})
		}), $(".lesson-nav dd").mouseout(function() {
			var e = $(this).find(".cateLists-li a");
			TweenMax.to(e, .4, {
				marginLeft: "0px",
				ease: Quart.easeOut
			})
		})
	},
	TopSearch: function() {
		$("input[name='q']").bind("focus", function() {
			$(".search-btn").addClass("search-btn2"), $(".hot-words").hide(), $(this).css({
				paddingRight: "55px"
			})
		}), $("input[name='q']").bind("focusout", function() {
			$(".search-btn").removeClass("search-btn2"), $(".hot-words").show()
		}), $("#J_keywordList .result-list").delegate(".current", "click", function() {
			var e = $(this).text();
			$("input[name='q']").val(e)
		})
	},
	gotop: function() {
		function e(e) {
			$(window).height() < 830 && $(window).scrollTop() <= 490 ? $(e).fadeOut() : $(e).fadeIn()
		}
		var t = ($.cookie("pewm"), function() {
			var t = $.cookie("pewm");
			"none" == t && $(".erwma").show(), "none" != t && $("#bannerbox").length > 0 && e("#pewm")
		});
		if (0 == $("#gototop").length) {
			$("body").append(n);
			var n = $("#gototop");
			t()
		} else var n = $("#gototop");
		$(".pewm2").find(".close").on("click", function() {
			$(".pewm2").fadeOut().remove()
		}), $(".pewm3").find(".close").on("click", function() {
			$(".pewm3").fadeOut().remove()
		}), $("#pewm").on("click", function() {
			$(this).fadeOut(), $.cookie("pewm", "none", {
				expires: 1,
				path: "/"
			}), $(".erwma").fadeIn()
		}), $(window).scrollTop() <= 0 && $("#gototop>.top").hide(), n.find(".top").bind("click", function() {
			return $(window).scrollTop() <= 0 ? !1 : ($("body,html").animate({
				scrollTop: 0
			}, 200), !1)
		}), n.find(".erwma").bind("mouseover", function() {
			$(".erwma>img").fadeIn(), $(".jk-app img").hide(), JKXY.stopEventBubble()
		}), n.find(".jk-app").bind("mouseover", function() {
			$(".jk-app img").fadeIn(), $(".erwma>img").hide(), JKXY.stopEventBubble()
		}), $(document).bind("mouseover", function() {
			$(".erwma>img").stop(!0, !0), $(".jk-app img").stop(!0, !0), $(".jk-app img").fadeOut(), $(".erwma>img").fadeOut()
		}), $(window).scroll(function() {
			$(window).scrollTop() > 0 ? $("#gototop>.top").fadeIn() : $("#gototop>.top").fadeOut(), t()
		}), n.find(".news").bind("click", function() {
			if (JKXY.Browser.IE && (JKXY.Browser.IE6 || JKXY.Browser.IE7 || JKXY.Browser.IE8)) {
				if ($("#warningpop").has("#ie-test")) return !1;
				$("#warningpop").append(version)
			}
			$("#warningpop").tooltip("pop", {
				width: 540,
				height: "auto",
				popId: "#warningpop",
				opacity: .3
			})
		}), $(".close-img").bind("click", function() {
			$(this).parent().remove()
		})
	}
}, JKXY.msgBox = function(e, t, n, o) {
	var t = t ? t : "亲爱的VIP，这是来自极客学院小雪的 Hello~",
		i = "warning",
		n = parseInt(n) ? parseInt(n) : 1500;
	switch (e) {
		case 1:
			var s = "waring-success";
			break;
		case 0:
			var s = "waring-failure";
			break;
		case 2:
		default:
			var s = "waring-sub"
	}
	var a;
	a = '<div class="web-dia-tip ' + s + '" id="' + i + '" >', a += t, a += "</div>", $("body").append(a);
	var r = $("#" + i).width() / 2;
	$("#" + i).css("marginLeft", -r), $("#" + i).animate({
		top: "0px",
		opacity: 1
	}, 300, function() {
		$("#" + i).delay(n).animate({
			top: "-50px",
			opacity: 0
		}, 500, function() {
			$("#" + i).remove(), "function" == typeof o && o()
		})
	})
};
var C = function(e, t) {
	this.box = e, this.left = this.box.find(".left"), this.right = this.box.find(".cright"), this.mask = this.box.find(".mask"), this.text = this.box.find(".text"), this.d = 0, this.A = null, this.deg = t, this.init()
};
C.prototype = {
	init: function() {
		var e = this;
		this.A = window.setInterval(function() {
			e.change()
		}, 10)
	},
	change: function() {
		if (this.d > 180) {
			if (this.d > 360) return window.clearInterval(this.A), void(this.A = null);
			this.right.show(), this.mask.hide()
		}
		this.text.text(parseInt(this.d / 3.6) + "%"), this.left.css({
			"-webkit-transform": "rotate(" + this.d + "deg)",
			"-moz-transform": "rotate(" + this.d + "deg)"
		}), this.d < this.deg && (this.d += 6)
	}
}, JKXY.htmlEncode = htmlEncode = function(e) {
	var t = "";
	return 0 == e.length ? "" : (t = e.replace(/&/g, "&amp;"), t = t.replace(/</g, "&lt;"), t = t.replace(/>/g, "&gt;"), t = t.replace(/ /g, "&nbsp;"), t = t.replace(/\'/g, "&#39;"), t = t.replace(/\"/g, "&quot;"), t = t.replace(/\n/g, "<br>"))
}, JKXY.htmlDecode = htmlDecode = function(e) {
	var t = "";
	return 0 == e.length ? "" : (t = e.replace(/&amp;/g, "&"), t = t.replace(/&lt;/g, "<"), t = t.replace(/&gt;/g, ">"), t = t.replace(/&nbsp;/g, " "), t = t.replace(/&#39;/g, "'"), t = t.replace(/&quot;/g, '"'), t = t.replace(/<br>/g, "\n"))
}, JKXY.msgBox = function(e, t, n, o) {
	var t = t ? t : "亲爱的VIP，这是来自极客学院小雪的 Hello~",
		i = "warning",
		n = parseInt(n) ? parseInt(n) : 2e3;
	switch (e) {
		case 1:
			var s = "waring-success";
			break;
		case 0:
			var s = "waring-failure";
			break;
		case 2:
		default:
			var s = "waring-sub"
	}
	var a;
	a = '<div class="web-dia-tip ' + s + '" id="' + i + '" >', a += t, a += "</div>", $("body").append(a);
	var r = $("#" + i).width() / 2;
	$("#" + i).css("marginLeft", -r), $("#" + i).animate({
		top: "0px",
		opacity: 1
	}, 300, function() {
		$("#" + i).delay(n).animate({
			top: "-50px",
			opacity: 0
		}, 500, function() {
			$("#" + i).remove(), "function" == typeof o && o()
		})
	})
}, $(function() {
	JKXY.init()
});;
var shoucang = {
	init: function() {
		this.bindEle()
	},
	lock: "true",
	isShoucang: !0,
	bindEle: function() {
		$(".cancel-favorites").one("click", this.collection2), this.lock && ($(".lesson-shoucang").unbind("click"), $(".lesson-shoucang").bind("click", this.collection2));
		var n = this;
		$(".lesson-list li").hover(n.lessonHover, n.lessonOut)
	},
	collection2: function() {
		shoucang.lock = !1;
		var n = $(this),
			o = n.parents("li").attr("id");
		shoucang.isShoucang && (n.hasClass("ysc") ? n.removeClass("ysc") : n.addClass("ysc"), shoucang.isShoucang = !1, shoucang.lock = !0), shoucang.lock && (n.hasClass("cancel-favorites") ? shoucang.collecFunction(o, "remove") : shoucang.collecFunction(o))
	},
	collecFunction: function(n, o) {
		$.ajax({
			type: "get",
			url: "/course/fav",
			success: function(c) {
				JKXY.msgBox(1, c.msg, 1500, function() {
					shoucang.isShoucang = !0
				}), "remove" == o && $("#" + n).remove()
			},
			data: {
				course_id: n
			},
			complete: function() {},
			dataType: "json"
		})
	},
	lessonHover: function() {
		$(this).find(".jd-line").hide()
	},
	lessonOut: function(n, o) {
		var o = "object" == typeof o ? o : $(this);
		o.find(".jd-line").show()
	}
};
$(function() {
	shoucang.init()
});