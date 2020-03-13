! function (b) {
    var a = {};
    b(function () {
        a.Load()
    }), a.Load = function () {
        if (1 == b("section > div > div:nth-child(2) > div:nth-child(2) div span").length) {
            var c;
            if (c = b("section > div > div:nth-child(2) > div:nth-child(2) div span").text(), c = parseInt(c, 10), TheLink = b("section > div > div:nth-child(2) > div:nth-child(2) > a").attr("href"), 0 === c) {
                switch (Link.exit) {
                    case "btn":
                        b("section > div > div:nth-child(2) > div:nth-child(2) div").remove(), b("p").fadeIn(2e3), b("a").fadeIn(700);
                        break;
                    case "clo":
                        window.location.replace(TheLink);
                }
                return
            }
            c--, b("section > div > div:nth-child(2) > div:nth-child(2) div span").html(c), setTimeout(a.Load, 1e3)
        }
    }
}(jQuery);
var Link = {
    "time": "10",
    "exit": "btn"
};
$(document).ready(function() {
    $( 'header > div:nth-child(2) div:nth-child(1)' ).click(function() {
        $('header > div:nth-child(2) div:nth-child(2)').toggle();
    });
    $('header > div:nth-child(2) div:nth-child(2) ul li:nth-child(2)').click(function(){
        $('section:nth-child(3)').slideToggle('slow');
    });
    $('header > div:nth-child(2) div:nth-child(2) ul li').click(function(){
        $('header > div:nth-child(2) div:nth-child(2)').toggle();
    });
    $( 'section:nth-child(3) ul li a' ).click(function() {
        $('section:nth-child(3)').slideToggle('slow');
    });
    $( 'section:nth-child(4) p strong' ).click(function() {
        $('section:nth-child(4)').slideToggle('slow');
    });
    function snacklinkready(){
        $('section:nth-child(4)').slideToggle('slow');
    }
    setTimeout(snacklinkready, 8000);      
});