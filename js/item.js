// jQuery(document).ready(function($) {
//     $('.multi-item-carousel .item').each(function() {
//         var next = $(this).next();
//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }
//         next.children(':first-child').clone().appendTo($(this));
//         for (var i = 0; i < 2; i++) {
//             next = next.next();
//             if (!next.length) {
//                 next = $(this).siblings(':first');
//             }

//             next.children(':first-child').clone().appendTo($(this));
//         }

//     });

//     $("#img_01").elevateZoom({ gallery: 'gal1', cursor: 'pointer', galleryActiveClass: 'zoom', imageCrossfade: true, });
//     //pass the images to Fancybox
//     $("#img_01").bind("click", function(e) {
//         var ez = $('#img_01').data('elevateZoom');
//         $.fancybox(ez.getGalleryList());
//         return false;
//     });
//     $(document).on('mouseout', '.box-image', function() {
//         $('.zoomContainer').remove();
//     })
// })