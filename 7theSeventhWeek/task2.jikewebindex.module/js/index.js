/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date2015-09-19 18:02:01
 * @version $Id$
 */

function changeTheme() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/0.png) repeat";

	localStorage.a = '5';
}

function changeTheme1() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/1.png) repeat";

	localStorage.a = '1';
}

function changeTheme2() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/2.png) repeat";
	localStorage.a = '2';
}

function changeTheme3() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/3.png) repeat";
	localStorage.a = '3';
}

function changeTheme4() {
	var e = document.getElementById('theme');
	// console.log(e);
	e.setAttribute('style', 'background-attachment: fixed;' + 'background-clip: border-box;' + 'background-color: rgb(8, 43, 79);' + 'background-image:url(images/4.png);' + 'background-origin: padding-box;' + 'background-size: contain;')
	var q = document.getElementById('qlogin');
	// console.log(a);
	q.setAttribute("style", "color:#fff;");
	var l = document.getElementById('login');
	// console.log(a);
	l.setAttribute("style", "color:#fff;");
	var r = document.getElementById('register');
	// console.log(a);
	r.setAttribute("style", "color:#fff;");
	localStorage.a = '4';
}

var b = localStorage.getItem('a');
if (b == 1) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/1.png) repeat";
}
if (b == 2) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/2.png) repeat";
}
if (b == 3) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.style.background = "url(images/3.png) repeat";
}
if (b == 4) {
	var e = document.getElementById('theme');
	// console.log(e);
	e.setAttribute('style', 'background-attachment: fixed;' + 'background-clip: border-box;' + 'background-color: rgb(8, 43, 79);' + 'background-image:url(images/4.png);' + 'background-origin: padding-box;' + 'background-size: contain;')
	var q = document.getElementById('qlogin');
	// console.log(a);
	q.setAttribute("style", "color:#fff;");
	var l = document.getElementById('login');
	// console.log(a);
	l.setAttribute("style", "color:#fff;");
	var r = document.getElementById('register');
	// console.log(a);
	r.setAttribute("style", "color:#fff;");
} else {
	localStorage.clear();
}

// $(document).ready(function() {
	// var s = $(this).find(".lesson-list-show"),
	// 	i = s.find("div").length,
	// 	n = 400 * i,
	// 	e = s.height(),
	// 	l = $(window).height();
	// e > l ? (s.width(590), $(this).find(".lesson-list-show>div").width(590)) : (s.width(n), $(this).find(".lesson-list-show>div").width(n))
	// console.log(e);
	// console.log(i);
	// console.log(n);


	// 	var e = e || {};
	// 	e = {
	// 		init: function() {
	// 			this.classify()
	// 		},
	// 		classify: function() {
	// 			function s() {
	// 				var s = $(this).find(".lesson-list-show"),
	// 					i = s.find("div").length,
	// 					n = 400 * i,
	// 					e = s.height(),
	// 					l = $(window).height();
	// 				e > l ? (s.width(590), $(this).find(".lesson-list-show>div").width(590)) : (s.width(n), $(this).find(".lesson-list-show>div").width(n))
	// 			}

	// 			function i() {
	// 				$(this).find("ul").css({
	// 					overflow: "visible",
	// 					borderBottom: "1px solid #e4e4e4"
	// 				}), $(this).find("p").removeClass("line");
	// 				var s = $(".lesson-classfiy-nav>ul>li");
	// 				if (s.size() <= e) var i = 37 * s.size();
	// 				else var i = 37 * (e + 1);
	// 				$(".lesson-list-show").css("minHeight", i + 3), $(".lesson-classfiy-nav>ul").height(i)
	// 			}

	// 			function n() {
	// 				$(this).height();
	// 				$(this).find("ul").css({
	// 					height: "305px",
	// 					overflow: "hidden",
	// 					borderBottom: "0"
	// 				}), $(this).find("p").addClass("line"), $(".lesson-classfiy-nav>ul").height(305)
	// 			}
	// 			var e = 13,
	// 				l = $(".lesson-classfiy-nav>ul>li");
	// 			l.size() > e && $(".lesson-classfiy-nav>ul>li:gt(" + e + ")").remove(), $(".lesson-classfiy-nav li").bind("mouseover", s), $(".lesson-classfiy-nav").bind("mouseover", i), $(".lesson-classfiy-nav").bind("mouseout", n)
	// 		}
	// 	}, n.exports = e
// });



//  function(s, i, n) {
// 	var e = e || {};
// 	e = {
// 		init: function() {
// 			this.classify()
// 		},
// 		classify: function() {
// 			function s() {
// 				var s = $(this).find(".lesson-list-show"),
// 					i = s.find("div").length,
// 					n = 400 * i,
// 					e = s.height(),
// 					l = $(window).height();
// 				e > l ? (s.width(590), $(this).find(".lesson-list-show>div").width(590)) : (s.width(n), $(this).find(".lesson-list-show>div").width(n))
// 			}

// 			function i() {
// 				$(this).find("ul").css({
// 					overflow: "visible",
// 					borderBottom: "1px solid #e4e4e4"
// 				}), $(this).find("p").removeClass("line");
// 				var s = $(".lesson-classfiy-nav>ul>li");
// 				if (s.size() <= e) var i = 37 * s.size();
// 				else var i = 37 * (e + 1);
// 				$(".lesson-list-show").css("minHeight", i + 3), $(".lesson-classfiy-nav>ul").height(i)
// 			}

// 			function n() {
// 				$(this).height();
// 				$(this).find("ul").css({
// 					height: "305px",
// 					overflow: "hidden",
// 					borderBottom: "0"
// 				}), $(this).find("p").addClass("line"), $(".lesson-classfiy-nav>ul").height(305)
// 			}
// 			var e = 13,
// 				l = $(".lesson-classfiy-nav>ul>li");
// 			l.size() > e && $(".lesson-classfiy-nav>ul>li:gt(" + e + ")").remove(), $(".lesson-classfiy-nav li").bind("mouseover", s), $(".lesson-classfiy-nav").bind("mouseover", i), $(".lesson-classfiy-nav").bind("mouseout", n)
// 		}
// 	}, n.exports = e
// }
//
LazyLoad = function(e) {
		function t(t, n) {
			var s, r = e.createElement(t);
			for (s in n)
				n.hasOwnProperty(s) && r.setAttribute(s, n[s]);
			return r
		}

		function n(e) {
			var t, n, s = i[e];
			s && (t = s.callback,
				n = s.urls,
				n.shift(),
				u = 0,
				n.length || (t && t.call(s.context, s.obj),
					i[e] = null,
					f[e].length && r(e)))
		}

		function s() {
			var t = navigator.userAgent;
			o = {
				async: e.createElement("script").async === !0
			}, (o.webkit = /AppleWebKit\//.test(t)) || (o.ie = /MSIE|Trident/.test(t)) || (o.opera = /Opera/.test(t)) || (o.gecko = /Gecko\//.test(t)) || (o.unknown = !0)
		}

		function r(r, u, h, g, d) {
			var p, y, m, b, k, v, j = function() {
					n(r)
				},
				w = "css" === r,
				E = [];
			if (o || s(),
				u)
				if (u = "string" == typeof u ? [u] : u.concat(),
					w || o.async || o.gecko || o.opera)
					f[r].push({
						urls: u,
						callback: h,
						obj: g,
						context: d
					});
				else
					for (p = 0,
						y = u.length; y > p; ++p)
						f[r].push({
							urls: [u[p]],
							callback: p === y - 1 ? h : null,
							obj: g,
							context: d
						});
			if (!i[r] && (b = i[r] = f[r].shift())) {
				for (l || (l = e.head || e.getElementsByTagName("head")[0]),
					k = b.urls,
					p = 0,
					y = k.length; y > p; ++p) {
					if (v = k[p],
						w ? m = o.gecko ? t("style") : t("link", {
							href: v,
							rel: "stylesheet"
						}) : (m = t("script", {
								src: v
							}),
							m.async = !1),
						m.className = "lazyload",
						m.setAttribute("charset", "utf-8"),
						o.ie && !w && "onreadystatechange" in m && !("draggable" in m))
						m.onreadystatechange = function() {
							/loaded|complete/.test(m.readyState) && (m.onreadystatechange = null,
								j())
						};
					else if (w && (o.gecko || o.webkit))
						if (o.webkit) {
							var T;
							if (b.urls[p] = m.href,
								T = c()) {
								p--,
								y = k.length;
								continue
							}
						} else
							m.innerHTML = '@import "' + v + '";',
							a(m);
					else
						m.onload = m.onerror = j;
					E.push(m)
				}
				var A = document.createDocumentFragment();
				for (p = 0,
					y = E.length; y > p; ++p)
					A.appendChild(E[p]);
				var x;
				return "css" === r ? x = l : "js" === r && (x = document.getElementById("pages-container") || l),
					x.appendChild(A),
					E
			}
		}

		function a(e) {
			var t;
			try {
				t = !!e.sheet.cssRules
			} catch (s) {
				return u += 1,
					void(200 > u ? setTimeout(function() {
						a(e)
					}, 50) : t && n("css"))
			}
			n("css")
		}

		function c() {
			var e, t = i.css,
				s = !1;
			if (t) {
				for (e = h.length; --e >= 0;)
					if (h[e].href === t.urls[0]) {
						s = !0,
							n("css");
						break
					}
				u += 1,
					t && (200 > u ? setTimeout(c, 50) : n("css"))
			}
			return s
		}
		var o, l, i = {},
			u = 0,
			f = {
				css: [],
				js: []
			},
			h = e.styleSheets;
		return {
			css: function(e, t, n, s) {
				r("css", e, t, n, s)
			},
			js: function(e, t, n, s) {
				r("js", e, t, n, s)
			}
		}
	}
	(this.document);
var _ready = false;
_list = [];
_when = function(cb) {
	_ready ? cb() : _list.push(cb);
};
LazyLoad.js(['js/jquery.min.js',
	'js/TweenMax.min.js',
	'js/common_sync0.js',
	'js/setcookie.js',
	'js/common_sync1.js',
	'js/indexPage.js',
	'js/swiper.js',
	'js/index_sync0.js',
	'js/meiti.js'
], function() {
	! function() {
		require("common:header/pageloading.js").init("http://search.jikexueyuan.com");
		require('common:header/header.js').init();
	}
	();
	! function() {
		require('index:leftnav/leftnav.js').init();
	}
	();
	! function() {
		require("index:swiper/jkswiper.js").init();
	}
	();
	! function() {
		require("index:recommend/recommend.js").init();
		BigPipe.load('fivelesson');

	}
	();
	! function() {
		require("index:meiti/meiti.js").init();
	}
	();
	! function() {
		BigPipe.load('projectpath');
		BigPipe.load('system');
		BigPipe.load('enterprise');
		BigPipe.load('university');
		<!--BigPipe.load('link');-->
	}
	();;
	_ready = true;
	var _item;
	while ((_item = _list.shift())) {
		_item();
	}
});


