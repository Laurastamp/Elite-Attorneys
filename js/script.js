function setREVStartSize(e) {
    try {
        e.c = jQuery(e.c);
        var i = jQuery(window).width()
          , t = 9999
          , r = 0
          , n = 0
          , l = 0
          , f = 0
          , s = 0
          , h = 0;
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
            f > i && (t = r = f,
            l = e),
            i > f && f > r && (r = f,
            n = e)
        }),
        t > r && (l = n)),
        f = e.gridheight[l] || e.gridheight[0] || e.gridheight,
        s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth,
        h = i / s,
        h = h > 1 ? 1 : h,
        f = Math.round(h * f),
        "fullscreen" == e.sliderLayout) {
            var u = (e.c.width(),
            jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c)
                    jQuery.each(c, function(e, i) {
                        u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                    }),
                    e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else
            void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({
            height: f
        })
    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
};
var _iub = _iub || [];
_iub.csConfiguration = {
    "lang": "en",
    "siteId": 1032856,
    //usa il tuo siteId
    "cookiePolicyId": 37703820,
    //usa il tuo cookiePolicyId
    "banner": {
        "position": "float-bottom-center",
        "acceptButtonDisplay": true,
        "customizeButtonDisplay": true
    }
};
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
    document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
};
var htmlDivCss = unescape(".hesperiden.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%7D%0A.hesperiden.tparrows%3Ahover%20%7B%0A%09background%3Argba%280%2C%200%2C%200%2C%201%29%3B%0A%7D%0A.hesperiden.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A20px%3B%0A%09color%3Argb%28255%2C%20255%2C%20255%29%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.hesperiden.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82c%22%3B%0A%20%20%20%20margin-left%3A-3px%3B%0A%7D%0A.hesperiden.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82d%22%3B%0A%20%20%20%20margin-right%3A-3px%3B%0A%7D%0A.hephaistos%20.tp-bullet%20%7B%0A%09width%3A12px%3B%0A%09height%3A12px%3B%0A%09position%3Aabsolute%3B%0A%09background%3Argba%28153%2C%20153%2C%20153%2C%201%29%3B%0A%09border%3A3px%20solid%20rgba%28255%2C255%2C255%2C0.9%29%3B%0A%09border-radius%3A50%25%3B%0A%09cursor%3A%20pointer%3B%0A%09box-sizing%3Acontent-box%3B%0A%20%20%20%20box-shadow%3A%200px%200px%202px%201px%20rgba%28130%2C130%2C130%2C%200.3%29%3B%0A%7D%0A.hephaistos%20.tp-bullet%3Ahover%2C%0A.hephaistos%20.tp-bullet.selected%20%7B%0A%09background%3Argba%28255%2C%20255%2C%20255%2C%201%29%3B%0A%20%20%20%20border-color%3Argba%280%2C%200%2C%200%2C%201%29%3B%0A%7D%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
    htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}
