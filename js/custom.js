$.noConflict();
var $ = jQuery;


$(document).ready(function() {
    // $(".nav li").each(function() {
    //     $(this).click(function() {
    //         $(".nav li").removeClass("active");
    //         $(this).addClass("active")
    //     })
    // })


    // $('.multi-item-carousel .item').each(function() {
    //     var next = $(this).next();
    //     if (!next.length) {
    //         next = $(this).siblings(':first');
    //     }
    //     next.children(':first-child').clone().appendTo($(this));
    //     for (var i = 0; i < 2; i++) {
    //         next = next.next();
    //         if (!next.length) {
    //             next = $(this).siblings(':first');
    //         }

    //         next.children(':first-child').clone().appendTo($(this));
    //     }

    // });



    // $("#img_01").elevateZoom({ gallery: 'gal1', cursor: 'pointer', galleryActiveClass: 'zoom', imageCrossfade: true, });
    //pass the images to Fancybox
    // $("#img_01").on("click", function(e) {
    //     var ez = $('#img_01').data('elevateZoom');
    //     $(this).fancybox(ez.getGalleryList());
    //     return false;
    // });




    // $(".dropdown").hover(function() {
    //     var dropdownMenu = $(this).children(".dropdown-menu");
    //     if (dropdownMenu.is(":visible")) {
    //         dropdownMenu.parent().toggleClass("open");
    //     }
    // }); 

    var bodyHeight = $(window).height() - 80;
    if ($(window).height() > $('footer').height()) {
        bodyHeight = $(window).height() - $('footer').height();
    }


    $('.body-wrapper').css('min-height', bodyHeight);
    console.log($('.body-wrapper').css('min-height'));
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
})