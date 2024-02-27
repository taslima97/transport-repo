// (function ($) {
//     "use strict";
//     if ($(".logistec-slider").length > 0) {
//         var bannerSlider = new Swiper(".logistec-slider", {
//             spaceBetween: 0,
//             slidesPerView: 1,
//             mousewheel: false,
//             height: 500,
//             grabCursor: true,
//             loop: true,
//             effect: "slide",
//             parallax: true,
//             speed: 1400,
//             autoplay: {
//                 delay: 10000,
//             },
//             pagination: {
//                 el: ".swiper-pagination",
//                 type: "progressbar",
//             },
//             navigation: {
//                 prevEl: "#main-slider-two__swiper-button-prev",
//                 nextEl: "#main-slider-two__swiper-button-next",
//             },
//         });
//         bannerSlider.on("slideChange", function () {
//             var csli = bannerSlider.realIndex + 1,
//                 curnum = $("#current");
//             TweenMax.to(curnum, 0.2, {
//                 force3D: true,
//                 y: -10,
//                 opacity: 0,
//                 ease: Power2.easeOut,
//                 onComplete: function () {
//                     TweenMax.to(curnum, 0.1, {
//                         force3D: true,
//                         y: 10,
//                     });
//                     curnum.html("" + csli);
//                 },
//             });
//             TweenMax.to(curnum, 0.2, {
//                 force3D: true,
//                 y: 0,
//                 delay: 0.3,
//                 opacity: 1,
//                 ease: Power2.easeOut,
//             });
//         });

//         var totalSlides = bannerSlider.slides.length - 2;
//         $("#total").html("" + totalSlides);
//     }

// })(jQuery);



(function ($) {
    "use strict";

    $(".banner_slider_wrapper").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        dots:true,
        loop: true,
        margin: 0,
        nav: false,
        singleItem: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
            '<span class="fas fa-angle-left"></span>',
            '<span class="fas fa-angle-right"></span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });

    $(".banner-slider-wrapper-two").owlCarousel({
        animateOut: 'fadeOut', // Animation effect for slide out
        animateIn: 'fadeIn',
        dots:false,
        loop: true,
        margin: 0,
        nav: true,
        singleItem: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
            '<span class="fas fa-angle-left"></span>',
            '<span class="fas fa-angle-right"></span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });



    // service slider 
    $('.service_slider_wrapper').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    // service slider 
    $('.team_slider_wrapper').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });


        // counter
        jQuery(document).ready(function ($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
})(jQuery);