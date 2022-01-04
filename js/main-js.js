function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
function _is_hidden(el) {
	return (el.offsetParent === null)
}
function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//===================================================================================================================================
/**!
 * lightgallery.js | 1.1.3 | February 11th 2019
 * http://sachinchoolur.github.io/lightgallery.js/
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Lightgallery = e() } }(function () { var e, t, s; return function () { function e(t, s, l) { function i(r, d) { if (!s[r]) { if (!t[r]) { var a = "function" == typeof require && require; if (!d && a) return a(r, !0); if (o) return o(r, !0); var n = new Error("Cannot find module '" + r + "'"); throw n.code = "MODULE_NOT_FOUND", n } var u = s[r] = { exports: {} }; t[r][0].call(u.exports, function (e) { return i(t[r][1][e] || e) }, u, u.exports, e, t, s, l) } return s[r].exports } for (var o = "function" == typeof require && require, r = 0; r < l.length; r++)i(l[r]); return i } return e }()({ 1: [function (t, s, l) { !function (t, s) { if ("function" == typeof e && e.amd) e(["exports"], s); else if (void 0 !== l) s(l); else { var i = { exports: {} }; s(i.exports), t.lgUtils = i.exports } }(this, function (e) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var t = { getAttribute: function e(t, s) { return t[s] }, setAttribute: function e(t, s, l) { t[s] = l }, wrap: function e(t, s) { if (t) { var l = document.createElement("div"); l.className = s, t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t), l.appendChild(t) } }, addClass: function e(t, s) { t && (t.classList ? t.classList.add(s) : t.className += " " + s) }, removeClass: function e(t, s) { t && (t.classList ? t.classList.remove(s) : t.className = t.className.replace(new RegExp("(^|\\b)" + s.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, hasClass: function e(t, s) { return t.classList ? t.classList.contains(s) : new RegExp("(^| )" + s + "( |$)", "gi").test(t.className) }, setVendor: function e(t, s, l) { t && (t.style[s.charAt(0).toLowerCase() + s.slice(1)] = l, t.style["webkit" + s] = l, t.style["moz" + s] = l, t.style["ms" + s] = l, t.style["o" + s] = l) }, trigger: function e(t, s) { var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; if (t) { var i = new CustomEvent(s, { detail: l }); t.dispatchEvent(i) } }, Listener: { uid: 0 }, on: function e(s, l, i) { var o = this; s && l.split(" ").forEach(function (e) { var l = o.getAttribute(s, "lg-event-uid") || ""; t.Listener.uid++, l += "&" + t.Listener.uid, o.setAttribute(s, "lg-event-uid", l), t.Listener[e + t.Listener.uid] = i, s.addEventListener(e.split(".")[0], i, !1) }) }, off: function e(s, l) { if (s) { var i = this.getAttribute(s, "lg-event-uid"); if (i) { i = i.split("&"); for (var o = 0; o < i.length; o++)if (i[o]) { var r = l + i[o]; if ("." === r.substring(0, 1)) for (var d in t.Listener) t.Listener.hasOwnProperty(d) && d.split(".").indexOf(r.split(".")[1]) > -1 && (s.removeEventListener(d.split(".")[0], t.Listener[d]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[d]); else s.removeEventListener(r.split(".")[0], t.Listener[r]), this.setAttribute(s, "lg-event-uid", this.getAttribute(s, "lg-event-uid").replace("&" + i[o], "")), delete t.Listener[r] } } } }, param: function e(t) { return Object.keys(t).map(function (e) { return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]) }).join("&") } }; e.default = t }) }, {}], 2: [function (t, s, l) { !function (s, i) { if ("function" == typeof e && e.amd) e(["./lg-utils"], i); else if (void 0 !== l) i(t("./lg-utils")); else { var o = { exports: {} }; i(s.lgUtils), s.lightgallery = o.exports } }(this, function (e) { "use strict"; function t(e) { return e && e.__esModule ? e : { default: e } } function s(e, t) { if (this.el = e, this.s = i({}, o, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.items = [], this.s.dynamic ? this.items = this.s.dynamicEl : "this" === this.s.selector ? this.items.push(this.el) : "" !== this.s.selector ? this.s.selectWithin ? this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector) : this.items = this.el.querySelectorAll(this.s.selector) : this.items = this.el.children, this.___slide = "", this.outer = "", this.init(), this } var l = t(e), i = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var s = arguments[t]; for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l]) } return e }; !function () { function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var s = document.createEvent("CustomEvent"); return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s } if ("function" == typeof window.CustomEvent) return !1; e.prototype = window.Event.prototype, window.CustomEvent = e }(), window.utils = l.default, window.lgData = { uid: 0 }, window.lgModules = {}; var o = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !1, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 }; s.prototype.init = function () { var e = this; e.s.preload > e.items.length && (e.s.preload = e.items.length); var t = window.location.hash; if (t.indexOf("lg=" + this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), l.default.addClass(document.body, "lg-from-hash"), l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function () { e.build(e.index) }))), e.s.dynamic) l.default.trigger(this.el, "onBeforeOpen"), e.index = e.s.index || 0, l.default.hasClass(document.body, "lg-on") || (l.default.addClass(document.body, "lg-on"), setTimeout(function () { e.build(e.index) })); else for (var s = 0; s < e.items.length; s++)!function (t) { l.default.on(e.items[t], "click.lgcustom", function (s) { s.preventDefault(), l.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, l.default.hasClass(document.body, "lg-on") || (e.build(e.index), l.default.addClass(document.body, "lg-on")) }) }(s) }, s.prototype.build = function (e) { var t = this; t.structure(); for (var s in window.lgModules) t.modules[s] = new window.lgModules[s](t.el); t.slide(e, !1, !1), t.s.keyPress && t.keyPress(), t.items.length > 1 && (t.arrow(), setTimeout(function () { t.enableDrag(), t.enableSwipe() }, 50), t.s.mousewheel && t.mousewheel()), t.counter(), t.closeGallery(), l.default.trigger(t.el, "onAfterOpen"), l.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function () { l.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function () { l.default.addClass(t.outer, "lg-hide-items") }, t.s.hideBarsDelay) }) }, s.prototype.structure = function () { var e = "", t = "", s = 0, i = "", o, r = this; for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), l.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration + "ms"), s = 0; s < this.items.length; s++)e += '<div class="lg-item"></div>'; if (this.s.controls && this.items.length > 1 && (t = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (i = '<div class="lg-sub-html"></div>'), o = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + e + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + t + i + "</div></div>", document.body.insertAdjacentHTML("beforeend", o), this.outer = document.querySelector(".lg-outer"), this.___slide = this.outer.querySelectorAll(".lg-item"), this.s.useLeft ? (l.default.addClass(this.outer, "lg-use-left"), this.s.mode = "lg-slide") : l.default.addClass(this.outer, "lg-use-css3"), r.setTop(), l.default.on(window, "resize.lg orientationchange.lg", function () { setTimeout(function () { r.setTop() }, 100) }), l.default.addClass(this.___slide[this.index], "lg-current"), this.doCss() ? l.default.addClass(this.outer, "lg-css3") : (l.default.addClass(this.outer, "lg-css"), this.s.speed = 0), l.default.addClass(this.outer, this.s.mode), this.s.enableDrag && this.items.length > 1 && l.default.addClass(this.outer, "lg-grab"), this.s.showAfterLoad && l.default.addClass(this.outer, "lg-show-after-load"), this.doCss()) { var d = this.outer.querySelector(".lg-inner"); l.default.setVendor(d, "TransitionTimingFunction", this.s.cssEasing), l.default.setVendor(d, "TransitionDuration", this.s.speed + "ms") } setTimeout(function () { l.default.addClass(document.querySelector(".lg-backdrop"), "in") }), setTimeout(function () { l.default.addClass(r.outer, "lg-visible") }, this.s.backdropDuration), this.s.download && this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop }, s.prototype.setTop = function () { if ("100%" !== this.s.height) { var e = window.innerHeight, t = (e - parseInt(this.s.height, 10)) / 2, s = this.outer.querySelector(".lg"); e >= parseInt(this.s.height, 10) ? s.style.top = t + "px" : s.style.top = "0px" } }, s.prototype.doCss = function () { return !!function e() { var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], s = document.documentElement, l = 0; for (l = 0; l < t.length; l++)if (t[l] in s.style) return !0 }() }, s.prototype.isVideo = function (e, t) { var s; if (s = this.s.dynamic ? this.s.dynamicEl[t].html : this.items[t].getAttribute("data-html"), !e && s) return { html5: !0 }; var l = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i), i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i), o = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i), r = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i); return l ? { youtube: l } : i ? { vimeo: i } : o ? { dailymotion: o } : r ? { vk: r } : void 0 }, s.prototype.counter = function () { this.s.counter && this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend", '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + "</span></div>") }, s.prototype.addHtml = function (e) { var t = null, s; if (this.s.dynamic ? t = this.s.dynamicEl[e].subHtml : (s = this.items[e], t = s.getAttribute("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !t && (t = s.getAttribute("title")) && s.querySelector("img") && (t = s.querySelector("img").getAttribute("alt"))), void 0 !== t && null !== t) { var i = t.substring(0, 1); "." !== i && "#" !== i || (t = this.s.subHtmlSelectorRelative && !this.s.dynamic ? s.querySelector(t).innerHTML : document.querySelector(t).innerHTML) } else t = ""; ".lg-sub-html" === this.s.appendSubHtmlTo ? this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = t : this.___slide[e].insertAdjacentHTML("beforeend", t), void 0 !== t && null !== t && ("" === t ? l.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html") : l.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), "lg-empty-html")), l.default.trigger(this.el, "onAfterAppendSubHtml", { index: e }) }, s.prototype.preload = function (e) { var t = 1, s = 1; for (t = 1; t <= this.s.preload && !(t >= this.items.length - e); t++)this.loadContent(e + t, !1, 0); for (s = 1; s <= this.s.preload && !(e - s < 0); s++)this.loadContent(e - s, !1, 0) }, s.prototype.loadContent = function (e, t, s) { var i = this, o = !1, r, d, a, n, u, c, g = function e(t) { for (var s = [], l = [], i = 0; i < t.length; i++) { var o = t[i].split(" "); "" === o[0] && o.splice(0, 1), l.push(o[0]), s.push(o[1]) } for (var r = window.innerWidth, a = 0; a < s.length; a++)if (parseInt(s[a], 10) > r) { d = l[a]; break } }; if (i.s.dynamic) { if (i.s.dynamicEl[e].poster && (o = !0, a = i.s.dynamicEl[e].poster), c = i.s.dynamicEl[e].html, d = i.s.dynamicEl[e].src, i.s.dynamicEl[e].responsive) { g(i.s.dynamicEl[e].responsive.split(",")) } n = i.s.dynamicEl[e].srcset, u = i.s.dynamicEl[e].sizes } else { if (i.items[e].getAttribute("data-poster") && (o = !0, a = i.items[e].getAttribute("data-poster")), c = i.items[e].getAttribute("data-html"), d = i.items[e].getAttribute("href") || i.items[e].getAttribute("data-src"), i.items[e].getAttribute("data-responsive")) { g(i.items[e].getAttribute("data-responsive").split(",")) } n = i.items[e].getAttribute("data-srcset"), u = i.items[e].getAttribute("data-sizes") } var f = !1; i.s.dynamic ? i.s.dynamicEl[e].iframe && (f = !0) : "true" === i.items[e].getAttribute("data-iframe") && (f = !0); var h = i.isVideo(d, e); if (!l.default.hasClass(i.___slide[e], "lg-loaded")) { if (f) i.___slide[e].insertAdjacentHTML("afterbegin", '<div class="lg-video-cont" style="max-width:' + i.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + d + '"  allowfullscreen="true"></iframe></div></div>'); else if (o) { var m = ""; m = h && h.youtube ? "lg-has-youtube" : h && h.vimeo ? "lg-has-vimeo" : "lg-has-html5", i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont ' + m + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + a + '" /></div></div>') } else h ? (i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.default.trigger(i.el, "hasVideo", { index: e, src: d, html: c })) : i.___slide[e].insertAdjacentHTML("beforeend", '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + d + '" /></div>'); if (l.default.trigger(i.el, "onAferAppendSlide", { index: e }), r = i.___slide[e].querySelector(".lg-object"), u && r.setAttribute("sizes", u), n) { r.setAttribute("srcset", n); try { picturefill({ elements: [r[0]] }) } catch (e) { console.error("Make sure you have included Picturefill version 2") } } ".lg-sub-html" !== this.s.appendSubHtmlTo && i.addHtml(e), l.default.addClass(i.___slide[e], "lg-loaded") } l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () { var t = 0; s && !l.default.hasClass(document.body, "lg-from-hash") && (t = s), setTimeout(function () { l.default.addClass(i.___slide[e], "lg-complete"), l.default.trigger(i.el, "onSlideItemLoad", { index: e, delay: s || 0 }) }, t) }), h && h.html5 && !o && l.default.addClass(i.___slide[e], "lg-complete"), !0 === t && (l.default.hasClass(i.___slide[e], "lg-complete") ? i.preload(e) : l.default.on(i.___slide[e].querySelector(".lg-object"), "load.lg error.lg", function () { i.preload(e) })) }, s.prototype.slide = function (e, t, s) { for (var i = 0, o = 0; o < this.___slide.length; o++)if (l.default.hasClass(this.___slide[o], "lg-current")) { i = o; break } var r = this; if (!r.lGalleryOn || i !== e) { var d = this.___slide.length, a = r.lGalleryOn ? this.s.speed : 0, n = !1, u = !1; if (!r.lgBusy) { if (this.s.download) { var c; c = r.s.dynamic ? !1 !== r.s.dynamicEl[e].downloadUrl && (r.s.dynamicEl[e].downloadUrl || r.s.dynamicEl[e].src) : "false" !== r.items[e].getAttribute("data-download-url") && (r.items[e].getAttribute("data-download-url") || r.items[e].getAttribute("href") || r.items[e].getAttribute("data-src")), c ? (document.getElementById("lg-download").setAttribute("href", c), l.default.removeClass(r.outer, "lg-hide-download")) : l.default.addClass(r.outer, "lg-hide-download") } if (l.default.trigger(r.el, "onBeforeSlide", { prevIndex: i, index: e, fromTouch: t, fromThumb: s }), r.lgBusy = !0, clearTimeout(r.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () { r.addHtml(e) }, a), this.arrowDisable(e), t) { var g = e - 1, f = e + 1; 0 === e && i === d - 1 ? (f = 0, g = d - 1) : e === d - 1 && 0 === i && (f = 0, g = d - 1), l.default.removeClass(r.outer.querySelector(".lg-prev-slide"), "lg-prev-slide"), l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.removeClass(r.outer.querySelector(".lg-next-slide"), "lg-next-slide"), l.default.addClass(r.___slide[g], "lg-prev-slide"), l.default.addClass(r.___slide[f], "lg-next-slide"), l.default.addClass(r.___slide[e], "lg-current") } else { l.default.addClass(r.outer, "lg-no-trans"); for (var h = 0; h < this.___slide.length; h++)l.default.removeClass(this.___slide[h], "lg-prev-slide"), l.default.removeClass(this.___slide[h], "lg-next-slide"); e < i ? (u = !0, 0 !== e || i !== d - 1 || s || (u = !1, n = !0)) : e > i && (n = !0, e !== d - 1 || 0 !== i || s || (u = !0, n = !1)), u ? (l.default.addClass(this.___slide[e], "lg-prev-slide"), l.default.addClass(this.___slide[i], "lg-next-slide")) : n && (l.default.addClass(this.___slide[e], "lg-next-slide"), l.default.addClass(this.___slide[i], "lg-prev-slide")), setTimeout(function () { l.default.removeClass(r.outer.querySelector(".lg-current"), "lg-current"), l.default.addClass(r.___slide[e], "lg-current"), l.default.removeClass(r.outer, "lg-no-trans") }, 50) } r.lGalleryOn ? (setTimeout(function () { r.loadContent(e, !0, 0) }, this.s.speed + 50), setTimeout(function () { r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", { prevIndex: i, index: e, fromTouch: t, fromThumb: s }) }, this.s.speed)) : (r.loadContent(e, !0, r.s.backdropDuration), r.lgBusy = !1, l.default.trigger(r.el, "onAfterSlide", { prevIndex: i, index: e, fromTouch: t, fromThumb: s })), r.lGalleryOn = !0, this.s.counter && document.getElementById("lg-counter-current") && (document.getElementById("lg-counter-current").innerHTML = e + 1) } } }, s.prototype.goToNextSlide = function (e) { var t = this; t.lgBusy || (t.index + 1 < t.___slide.length ? (t.index++, l.default.trigger(t.el, "onBeforeNextSlide", { index: t.index }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = 0, l.default.trigger(t.el, "onBeforeNextSlide", { index: t.index }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-right-end"), setTimeout(function () { l.default.removeClass(t.outer, "lg-right-end") }, 400))) }, s.prototype.goToPrevSlide = function (e) { var t = this; t.lgBusy || (t.index > 0 ? (t.index--, l.default.trigger(t.el, "onBeforePrevSlide", { index: t.index, fromTouch: e }), t.slide(t.index, e, !1)) : t.s.loop ? (t.index = t.items.length - 1, l.default.trigger(t.el, "onBeforePrevSlide", { index: t.index, fromTouch: e }), t.slide(t.index, e, !1)) : t.s.slideEndAnimatoin && (l.default.addClass(t.outer, "lg-left-end"), setTimeout(function () { l.default.removeClass(t.outer, "lg-left-end") }, 400))) }, s.prototype.keyPress = function () { var e = this; this.items.length > 1 && l.default.on(window, "keyup.lg", function (t) { e.items.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide())) }), l.default.on(window, "keydown.lg", function (t) { !0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), l.default.hasClass(e.outer, "lg-thumb-open") ? l.default.removeClass(e.outer, "lg-thumb-open") : e.destroy()) }) }, s.prototype.arrow = function () { var e = this; l.default.on(this.outer.querySelector(".lg-prev"), "click.lg", function () { e.goToPrevSlide() }), l.default.on(this.outer.querySelector(".lg-next"), "click.lg", function () { e.goToNextSlide() }) }, s.prototype.arrowDisable = function (e) { if (!this.s.loop && this.s.hideControlOnEnd) { var t = this.outer.querySelector(".lg-next"), s = this.outer.querySelector(".lg-prev"); e + 1 < this.___slide.length ? (t.removeAttribute("disabled"), l.default.removeClass(t, "disabled")) : (t.setAttribute("disabled", "disabled"), l.default.addClass(t, "disabled")), e > 0 ? (s.removeAttribute("disabled"), l.default.removeClass(s, "disabled")) : (s.setAttribute("disabled", "disabled"), l.default.addClass(s, "disabled")) } }, s.prototype.setTranslate = function (e, t, s) { this.s.useLeft ? e.style.left = t : l.default.setVendor(e, "Transform", "translate3d(" + t + "px, " + s + "px, 0px)") }, s.prototype.touchMove = function (e, t) { var s = t - e; Math.abs(s) > 15 && (l.default.addClass(this.outer, "lg-dragging"), this.setTranslate(this.___slide[this.index], s, 0), this.setTranslate(document.querySelector(".lg-prev-slide"), -this.___slide[this.index].clientWidth + s, 0), this.setTranslate(document.querySelector(".lg-next-slide"), this.___slide[this.index].clientWidth + s, 0)) }, s.prototype.touchEnd = function (e) { var t = this; "lg-slide" !== t.s.mode && l.default.addClass(t.outer, "lg-slide"); for (var s = 0; s < this.___slide.length; s++)l.default.hasClass(this.___slide[s], "lg-current") || l.default.hasClass(this.___slide[s], "lg-prev-slide") || l.default.hasClass(this.___slide[s], "lg-next-slide") || (this.___slide[s].style.opacity = "0"); setTimeout(function () { l.default.removeClass(t.outer, "lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && l.default.trigger(t.el, "onSlideClick"); for (var s = 0; s < t.___slide.length; s++)t.___slide[s].removeAttribute("style") }), setTimeout(function () { l.default.hasClass(t.outer, "lg-dragging") || "lg-slide" === t.s.mode || l.default.removeClass(t.outer, "lg-slide") }, t.s.speed + 100) }, s.prototype.enableSwipe = function () { var e = this, t = 0, s = 0, i = !1; if (e.s.enableSwipe && e.isTouch && e.doCss()) { for (var o = 0; o < e.___slide.length; o++)l.default.on(e.___slide[o], "touchstart.lg", function (s) { l.default.hasClass(e.outer, "lg-zoomed") || e.lgBusy || (s.preventDefault(), e.manageSwipeClass(), t = s.targetTouches[0].pageX) }); for (var r = 0; r < e.___slide.length; r++)l.default.on(e.___slide[r], "touchmove.lg", function (o) { l.default.hasClass(e.outer, "lg-zoomed") || (o.preventDefault(), s = o.targetTouches[0].pageX, e.touchMove(t, s), i = !0) }); for (var d = 0; d < e.___slide.length; d++)l.default.on(e.___slide[d], "touchend.lg", function () { l.default.hasClass(e.outer, "lg-zoomed") || (i ? (i = !1, e.touchEnd(s - t)) : l.default.trigger(e.el, "onSlideClick")) }) } }, s.prototype.enableDrag = function () { var e = this, t = 0, s = 0, i = !1, o = !1; if (e.s.enableDrag && !e.isTouch && e.doCss()) { for (var r = 0; r < e.___slide.length; r++)l.default.on(e.___slide[r], "mousedown.lg", function (s) { l.default.hasClass(e.outer, "lg-zoomed") || (l.default.hasClass(s.target, "lg-object") || l.default.hasClass(s.target, "lg-video-play")) && (s.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = s.pageX, i = !0, e.outer.scrollLeft += 1, e.outer.scrollLeft -= 1, l.default.removeClass(e.outer, "lg-grab"), l.default.addClass(e.outer, "lg-grabbing"), l.default.trigger(e.el, "onDragstart"))) }); l.default.on(window, "mousemove.lg", function (r) { i && (o = !0, s = r.pageX, e.touchMove(t, s), l.default.trigger(e.el, "onDragmove")) }), l.default.on(window, "mouseup.lg", function (r) { o ? (o = !1, e.touchEnd(s - t), l.default.trigger(e.el, "onDragend")) : (l.default.hasClass(r.target, "lg-object") || l.default.hasClass(r.target, "lg-video-play")) && l.default.trigger(e.el, "onSlideClick"), i && (i = !1, l.default.removeClass(e.outer, "lg-grabbing"), l.default.addClass(e.outer, "lg-grab")) }) } }, s.prototype.manageSwipeClass = function () { var e = this.index + 1, t = this.index - 1, s = this.___slide.length; this.s.loop && (0 === this.index ? t = s - 1 : this.index === s - 1 && (e = 0)); for (var i = 0; i < this.___slide.length; i++)l.default.removeClass(this.___slide[i], "lg-next-slide"), l.default.removeClass(this.___slide[i], "lg-prev-slide"); t > -1 && l.default.addClass(this.___slide[t], "lg-prev-slide"), l.default.addClass(this.___slide[e], "lg-next-slide") }, s.prototype.mousewheel = function () { var e = this; l.default.on(e.outer, "mousewheel.lg", function (t) { t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault()) }) }, s.prototype.closeGallery = function () { var e = this, t = !1; l.default.on(this.outer.querySelector(".lg-close"), "click.lg", function () { e.destroy() }), e.s.closable && (l.default.on(e.outer, "mousedown.lg", function (e) { t = !!(l.default.hasClass(e.target, "lg-outer") || l.default.hasClass(e.target, "lg-item") || l.default.hasClass(e.target, "lg-img-wrap")) }), l.default.on(e.outer, "mouseup.lg", function (s) { (l.default.hasClass(s.target, "lg-outer") || l.default.hasClass(s.target, "lg-item") || l.default.hasClass(s.target, "lg-img-wrap") && t) && (l.default.hasClass(e.outer, "lg-dragging") || e.destroy()) })) }, s.prototype.destroy = function (e) { var t = this; if (e || l.default.trigger(t.el, "onBeforeClose"), document.body.scrollTop = t.prevScrollTop, document.documentElement.scrollTop = t.prevScrollTop, e) { if (!t.s.dynamic) for (var s = 0; s < this.items.length; s++)l.default.off(this.items[s], ".lg"), l.default.off(this.items[s], ".lgcustom"); var i = t.el.getAttribute("lg-uid"); delete window.lgData[i], t.el.removeAttribute("lg-uid") } l.default.off(this.el, ".lgtm"); for (var o in window.lgModules) t.modules[o] && t.modules[o].destroy(e); this.lGalleryOn = !1, clearTimeout(t.hideBartimeout), this.hideBartimeout = !1, l.default.off(window, ".lg"), l.default.removeClass(document.body, "lg-on"), l.default.removeClass(document.body, "lg-from-hash"), t.outer && l.default.removeClass(t.outer, "lg-visible"), l.default.removeClass(document.querySelector(".lg-backdrop"), "in"), setTimeout(function () { try { t.outer && t.outer.parentNode.removeChild(t.outer), document.querySelector(".lg-backdrop") && document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")), e || l.default.trigger(t.el, "onCloseAfter") } catch (e) { } }, t.s.backdropDuration + 50) }, window.lightGallery = function (e, t) { if (e) try { if (e.getAttribute("lg-uid")) try { window.lgData[e.getAttribute("lg-uid")].init() } catch (e) { console.error("lightGallery has not initiated properly") } else { var l = "lg" + window.lgData.uid++; window.lgData[l] = new s(e, t), e.setAttribute("lg-uid", l) } } catch (e) { console.error("lightGallery has not initiated properly") } } }) }, { "./lg-utils": 1 }] }, {}, [2])(2) });
//===================================================================================================================================
/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
//===================================================================================================================================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//===================================================================================================================================
let filterItems = document.querySelectorAll('.portfolio__column');

document.addEventListener('click', (e) => {
	if (e.target.closest('.filter__item')) {
		let currentFilterLink = e.target;
		
		let show = function (elem) {
			elem.style.display = 'block';
		};
		let hide = function (elem) {
			elem.style.display = 'none';
		};
		let activeFilterLink = function(){
			let filterLinks = document.querySelectorAll('.filter__item');
			filterLinks.forEach(link=>{
					link.classList.remove('active');
					currentFilterLink.classList.add('active');
			})
		}
		for (let index = 0; index < filterItems.length; index++) {
			let filterBlocks = filterItems[index];
			if (currentFilterLink.dataset.filter == "1") {
				show(filterBlocks);
				activeFilterLink()
			} else {
				hide(filterBlocks);
				let mustShow = document.querySelectorAll(`[data-f='${currentFilterLink.dataset.filter}']`);
				mustShow.forEach(willShownBlock =>{
					show(willShownBlock);
				})
				activeFilterLink()
			}
		}
	}
})
//===================================================================================================================================
let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open(message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
		// If test
		if (form.hasAttribute('data-test')) {
			e.preventDefault();
			popup_open(message + '-message');
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div hidden class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass" && !input.parentElement.querySelector('.form__viewpass').classList.contains('_active')) {
					input.setAttribute('type', 'password');
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

	let textFrom = priceSlider.getAttribute('data-from');
	let textTo = priceSlider.getAttribute('data-to');

	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
//===================================================================================================================================
//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
	let blocks = [];
	for (let index = 0; index < link.length; index++) {
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#', '');
		if (block_name != '' && !~blocks.indexOf(block_name)) {
			blocks.push(block_name);
		}
		el.addEventListener('click', function (e) {
			if (document.querySelector('.menu__body._active')) {
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		})
	}

	window.addEventListener('scroll', function (el) {
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if (old_current_link) {
			for (let index = 0; index < old_current_link.length; index++) {
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for (let index = 0; index < blocks.length; index++) {
			let block = blocks[index];
			let block_item = document.querySelector('.' + block);
			if (block_item) {
				let block_offset = offset(block_item).top;
				let block_height = block_item.offsetHeight;
				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
					for (let index = 0; index < current_links.length; index++) {
						let current_link = current_links[index];
						current_link.classList.add('_active');
					}
				}
			}
		}
	})
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 300);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}
//===================================================================================================================================
window.addEventListener('scroll', ()=>{
	let s = scrollY/2;
	let mainBg = document.querySelector('.mainblock__image');
	let prallax = function(mainBg){
		 mainBg.style.transform = `translate3d(0,${s}px,0)`;
	}
	prallax(mainBg);
});
