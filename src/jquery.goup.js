/*
 *
 * Copyright (c) 2016 freedomlang (https://github.com/freedomlang)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 0.2.5
 *
 */
(function(e) {
    function InOrOut(element, visible, effect) {
        if (visible == "show") {
            switch (effect) {
            case "fade":
                element.fadeIn();
                break;
            case "slide":
                element.slideDown();
                break;
            default:
                element.fadeIn()
            }
        } else {
            switch (effect) {
            case "fade":
                element.fadeOut();
                break;
            case "slide":
                element.slideUp();
                break;
            default:
                element.fadeOut()
            }
        }
    }
    function addStylesheetRules (rules) {
        var styleEl = document.createElement('style');

        // Append style element to head
        document.head.appendChild(styleEl);

        // Grab style sheet
        var styleSheet = styleEl.sheet;

        for (var i = 0, rl = rules.length; i < rl; i++) {
            var j = 1, rule = rules[i], selector = rules[i][0], propStr = '';
            // If the second argument of a rule is an array of arrays, correct our variables.
            if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
                rule = rule[1];
                j = 0;
            }

            for (var pl = rule.length; j < pl; j++) {
                var prop = rule[j];
                propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
            }

            // Insert CSS Rule
            styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
        }
    }
    // Options
    e.goup = function(n) {
        var r = e.extend({
            location: "right",
            locationOffset: 150,
            bottomOffset: 100,
            containerSize: 40,
            containerRadius: 10,
            containerClass: "goup-container",
            trigger: 250,
            entryAnimation: "fade",
            goupSpeed: "slow",
            hideUnderWidth: 500,
            second: 0.3,
            bcolor: "#eee",
            acolor: "#bbb"
        }, n);
        // Add plugin to the body
        e("body").append('<svg class="' + r.containerClass + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="36.1 192 576 372" enable-background="new 36.1 192 576 372" xml:space="preserve"><g><g transform="translate(1.000000, 2.000000)"><path d="M563,406c-7.2,0-14.5-1.6-21.5-5.1L323.1,291.7L104.5,400.9c-23.8,11.9-52.5,2.2-64.4-21.5    c-11.9-23.7-2.2-52.5,21.5-64.4l240-120c13.5-6.8,29.4-6.8,42.9,0l240,120c23.7,11.8,33.3,40.7,21.5,64.4    C597.6,396.3,580.6,406,563,406L563,406z"></path><path d="M563,562c-3.6,0-7.2-0.8-10.7-2.5L323.1,444.8L93.8,559.5c-11.8,5.9-26.3,1.1-32.2-10.7    c-5.9-11.8-1.1-26.2,10.8-32.2l240-120c6.8-3.4,14.7-3.4,21.5,0l240,120c11.9,5.9,16.7,20.3,10.8,32.2    C580.3,557.1,571.8,562,563,562L563,562z"></path></g></g></svg>');
        var i = e("." + r.containerClass);
        // Check all the options
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
        // Prepare the rules to insert
        var rs = [];
        rs[0]=[];
        rs[0][0]="." + r.containerClass;
        rs[0][1]=[];
        rs[0][1][0]="position";
        rs[0][1][1]="fixed";
        rs[0][2]=[];
        rs[0][2][0]="width";
        rs[0][2][1]=r.containerSize + 18 + "px";
        rs[0][3]=[];
        rs[0][3][0]="height";
        rs[0][3][1]=r.containerSize + "px";
        rs[0][4]=[];
        rs[0][4][0]="cursor";
        rs[0][4][1]="pointer";
        rs[0][5]=[];
        rs[0][5][0]="bottom";
        rs[0][5][1]=r.bottomOffset + "px";
        rs[0][6]=[];
        rs[0][6][0]=r.location;
        rs[0][6][1]=r.locationOffset + "px"; 
        rs[0][7]=[];
        rs[0][7][0]="border-radius";
        rs[0][7][1]=r.containerRadius + "px";
        rs[0][8]=[];
        rs[0][8][0]="fill";
        rs[0][8][1]=r.bcolor;
        rs[0][9]=[];
        rs[0][9][0]="transition";
        rs[0][9][1]="fill " + r.second + "s";
        rs[0][10]=[];
        rs[0][10][0]="-moz-transition";
        rs[0][10][1]="fill " + r.second + "s";
        rs[0][11]=[];
        rs[0][11][0]="-webkit-transition";
        rs[0][11][1]="fill " + r.second + "s";
        rs[0][12]=[];
        rs[0][12][0]="-o-transition";
        rs[0][12][1]="fill " + r.second + "s";
        rs[0][13]=[];
        rs[0][13][0]="display";
        rs[0][13][1]="none";
        rs[1]=[];
        rs[1][0]="." + r.containerClass + ":hover";
        rs[1][1]=[];
        rs[1][1][0]="fill";
        rs[1][1][1]=r.acolor;
        addStylesheetRules(rs);
        // If the window's width is less than the value you set, the plugin will be disappear!
        var h = false;
        e(window).resize(function() {
            if (e(window).outerWidth() <= r.hideUnderWidth) {
                h = true;
                InOrOut(e(i), "hide", r.entryAnimation);
            } else {
                h = false;
                e(window).trigger("scroll")
            }
        });
        if (e(window).outerWidth() <= r.hideUnderWidth) {
            h = true;
            e(i).hide();
        }
        if (e(window).scrollTop() >= r.trigger && !h) {
            InOrOut(e(i), "show", r.entryAnimation);
        }
        var p = true;
        e(i).add().on("click", function() {
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