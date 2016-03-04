/*
 *
 * Copyright (c) 2014 Daniele Lenares (https://github.com/Ryuk87)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 1.0.0
 *
 */
(function(e) {
    function t(e, t, n) {
        if (t == "show") {
            switch (n) {
            case "fade":
                e.fadeIn();
                break;
            case "slide":
                e.slideDown();
                break;
            default:
                e.fadeIn()
            }
        } else {
            switch (n) {
            case "fade":
                e.fadeOut();
                break;
            case "slide":
                e.slideUp();
                break;
            default:
                e.fadeOut()
            }
        }
    }
    e.goup = function(n) {
        var r = e.extend({
            location: "right",
            locationOffset: 150,
            bottomOffset: 100,
            containerSize: 40,
            containerRadius: 10,
            containerClass: "goup-container",
            alwaysVisible: false,
            trigger: 250,
            entryAnimation: "fade",
            goupSpeed: "slow",
            hideUnderWidth: 500,
            title: "",
            titleAsText: false,
            titleAsTextClass: "goup-text",
            img: "http://freedomlang.com/usr/themes/default/img/arrow_up.svg"
        }, n);
        e("body").append('<svg fill="#eee" ' + 'style="display:none" class="' + r.containerClass + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="36.1 192 576 372" enable-background="new 36.1 192 576 372" xml:space="preserve"><g><g transform="translate(1.000000, 2.000000)"><path d="M563,406c-7.2,0-14.5-1.6-21.5-5.1L323.1,291.7L104.5,400.9c-23.8,11.9-52.5,2.2-64.4-21.5    c-11.9-23.7-2.2-52.5,21.5-64.4l240-120c13.5-6.8,29.4-6.8,42.9,0l240,120c23.7,11.8,33.3,40.7,21.5,64.4    C597.6,396.3,580.6,406,563,406L563,406z"></path><path d="M563,562c-3.6,0-7.2-0.8-10.7-2.5L323.1,444.8L93.8,559.5c-11.8,5.9-26.3,1.1-32.2-10.7    c-5.9-11.8-1.1-26.2,10.8-32.2l240-120c6.8-3.4,14.7-3.4,21.5,0l240,120c11.9,5.9,16.7,20.3,10.8,32.2    C580.3,557.1,571.8,562,563,562L563,562z"></path></g></g></svg>');
        var i = e("." + r.containerClass);
        if (r.location != "right" && r.location != "left") {
            r.location = "right"
        }
        if (r.locationOffset < 0) {
            r.locationOffset = 0
        }
        if (r.bottomOffset < 0) {
            r.bottomOffset = 0
        }
        if (r.containerSize < 20) {
            r.containerSize = 20
        }
        if (r.containerRadius < 0) {
            r.containerRadius = 0
        }
        if (r.trigger < 0) {
            r.trigger = 0
        }
        if (r.hideUnderWidth < 0) {
            r.hideUnderWidth = 0
        }
        if (r.title === "") {
            r.titleAsText = false
        }
        var u = {};
        u = {
            position: "fixed",
            width: r.containerSize + 18,
            height: r.containerSize,
            cursor: "pointer"
        };
        u["bottom"] = r.bottomOffset;
        u[r.location] = r.locationOffset;
        u["border-radius"] = r.containerRadius;
        e(i).css(u);
        if (!r.titleAsText) {
            e(i).attr("title", r.title)
        } else {
            e("body").append('<div class="' + r.titleAsTextClass + '">' + r.title + "</div>");
            var a = e("." + r.titleAsTextClass);
            e(a).attr("style", e(i).attr("style"));
            e(a).css("background", "transparent").css("width", r.containerSize + 40).css("height", "auto").css("text-align", "center").css(r.location, r.locationOffset - 20);
            var f = e(a).height() + 10;
            e(i).css("bottom", "+=" + f + "px")
        }
        var h = false;
        e(window).resize(function() {
            if (e(window).outerWidth() <= r.hideUnderWidth) {
                h = true;
                t(e(i), "hide", r.entryAnimation);
                if (a)
                    t(e(a), "hide", r.entryAnimation)
            } else {
                h = false;
                e(window).trigger("scroll")
            }
        });
        if (e(window).outerWidth() <= r.hideUnderWidth) {
            h = true;
            e(i).hide();
            if (a)
                e(a).hide()
        }
        if (!r.alwaysVisible) {
            e(window).scroll(function() {
                if (e(window).scrollTop() >= r.trigger && !h) {
                    t(e(i), "show", r.entryAnimation);
                    if (a)
                        t(e(a), "show", r.entryAnimation)
                }
                if (e(window).scrollTop() < r.trigger && !h) {
                    t(e(i), "hide", r.entryAnimation);
                    if (a)
                        t(e(a), "hide", r.entryAnimation)
                }
            })
        } else {
            t(e(i), "show", r.entryAnimation);
            if (a)
                t(e(a), "show", r.entryAnimation)
        }
        if (e(window).scrollTop() >= r.trigger && !h) {
            t(e(i), "show", r.entryAnimation);
            if (a)
                t(e(a), "show", r.entryAnimation)
        }
        var p = true;
        e(i).add(a).on("click", function() {
            if (p) {
                p = false;
                e("html,body").animate({
                    scrollTop: 0
                }, r.goupSpeed, function() {
                    p = true
                })
            }
            return false
        })
    }
})(jQuery)
