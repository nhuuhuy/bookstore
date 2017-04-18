jQuery(document).ready(function($) {
    $(".nav li").each(function() {
            $(this).click(function() {
                $(".nav li").removeClass("active");
                $(this).addClass("active")
            })
        })
        // $(".search").click(function(){
        // 	$("#search").fadeToggle('slow')
        // })

    $('.multi-item-carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }

        // if (next.next().next().next().length > 0) {
        //     next.next().children(':first-child').clone().appendTo($(this));

        // } else {
        //     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        // }
    });

    $("#img_01").elevateZoom({ gallery: 'gal1', cursor: 'pointer', galleryActiveClass: 'zoom', imageCrossfade: true, });

    //pass the images to Fancybox
    $("#img_01").bind("click", function(e) {
        var ez = $('#img_01').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });
    //dropdown
    $(".dropdown").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });

})