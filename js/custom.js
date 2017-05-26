$.noConflict();
var $ = jQuery;


$(document).ready(function() {
    $(".nav li").each(function() {
        $(this).click(function() {
            $(".nav li").removeClass("active");
            $(this).addClass("active")
        })
    })



    var bodyHeight = $(window).height() - 80;
    if ($(window).height() > $('footer').height()) {
        bodyHeight = $(window).height() - $('footer').height();
    }
    $('.body-wrapper').css('min-height', bodyHeight);

    // back top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    // off canvas menu
    $('.navbar-toggle').click(function() {
        $(".off-canvas ").toggleClass("active");

    })
    $('.body-wrapper, footer').click(function() {
        $(".off-canvas ").removeClass("active");
    })
})