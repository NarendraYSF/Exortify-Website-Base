jQuery(function($) {
    
	'use strict';
    //Preloader

    $(".page-loader .loader").delay(0).fadeOut();
    $(".page-loader").delay(500).fadeOut("slow");


    //Menu Sticky
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 1) {
            $('.main-nav').addClass('menu-sticky');
            $('.main-nav.js-transparent').removeClass('menu-transparent');
            $('.main-nav.has-top-nav').removeClass('mrg-top-40');
            $('.main-nav.js-transparent.has-top-logo').removeClass('mrg-top-90');
            $('.main-nav.float-menu').removeClass('float-menu-style');
            $('.top-nav,.top-logo').addClass('push-top');
            $('.screen-frame .bar-top').addClass('after-scroll');

        } else {
            $('.main-nav').removeClass('menu-sticky');
            $('.main-nav.js-transparent').addClass('menu-transparent');
            $('.main-nav.has-top-nav').addClass('mrg-top-40');
            $('.main-nav.js-transparent.has-top-logo').addClass('mrg-top-90');
            $('.main-nav.float-menu').addClass('float-menu-style');
            $('.top-nav,.top-logo').removeClass('push-top');
            $('.screen-frame .bar-top').removeClass('after-scroll');
        }
    });


    // Full Screen Menu
    $('.fs-menu-trigger').on('click', function() {
        $('.fs-menu').addClass('active');
    });

    $('.fs-menu-close, .menu-close').on('click', function() {
        $('.fs-menu').removeClass('active');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('.fs-menu').removeClass('active');
        }
    });


    //Side Menu	
    $("#menu-toggle").on('click', function(e) {
        e.preventDefault();
        $(".side-nav").toggleClass("toggled");
    });

    $('.side-nav .sidebar-inner li.dropdown').children('ul').hide();

    $('.side-nav .sidebar-inner li a').click(function(event) {
        event.stopPropagation();
        $(this).find(".side-nav .sidebar-inner li a").removeClass('menu-open');
        $(this).parents(".side-nav .sidebar-inner li a").addClass('menu-open');
        $(this).toggleClass('menu-open');
        $(this).parent().children('ul.side-sub-menu').toggle(200);
    });


    //OnePage Menu tracking 
    $('body').scrollspy({
        target: ".op-nav .custom-collapse"
    })


    //Mobile sub menu
    $(".submenu").click(function(event) {
        event.stopPropagation();
        $(this).find(".submenu").removeClass('open');
        $(this).parents(".submenu").addClass('open');
        $(this).toggleClass('open');
    });


    // Search
    $('#search-trigger').on('click', function() {
        $('#search').addClass('active').find('.search').focus();
    });

    $('#search').on('click', function() {
        $(this).find('.search').focus();
    });

    $('#close').on('click', function() {
        $('#search').removeClass('active');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('#search').removeClass('active');
        }
    });


    // scroll to
    $('.scroll-to').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });


    // back to top
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


    //Youtube Video Background
    $(function() {
        $(".video-player").YTPlayer();
    });


    // Works Item Lightbox				
    $(".lightbox-image").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: "mfp-fade"

    });

    $(".individual-gallery").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: "mfp-fade"

    });

    $('.lightbox-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    // WOW Animation
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();


    //parallax
    $('.parallax').parallax("50% 100%", 0.5);

    // Progress bars
    $(".progress-bar").appear(function(indx) {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });

    // Counters
    $(".counter").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 2000,
            refreshInterval: 60,
        });
    });


    // Count-down
    $().ready(function() {
        var endDate = "June 7, 2017 15:03:25";
        $('.countdown').countdown({
            date: endDate,
            render: function(data) {
                $(this.el).html("<div>" + this.leadingZeros(data.days, 3) +
                    " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) +
                    " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) +
                    " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) +
                    " <span>sec</span></div>");
            }
        });
    });


    // Owl-carousel    

    // Single Item
    // Basic Single Slide no pagination & navigation
    $(".owl-single").owlCarousel({
        singleItem: true,
        slideSpeed: 300,
        autoPlay: 10000,
        transitionStyle: "fade",
        pagination: false,
        navigation: false,
    });

    // Single slide with navigation only
    $(".owl-single-nav").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        singleItem: true,
        transitionStyle: "fade",
        pagination: false,
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ],
    });

    // Single slide with pagination only
    $(".owl-single-pag").owlCarousel({
        slideSpeed: 300,
        singleItem: true,
        pagination: true,
        transitionStyle: "fade",
    });

    // Single slide with all controls
    $(".owl-single-all").owlCarousel({
        slideSpeed: 300,
        singleItem: true,
        pagination: true,
        navigation: true,
        transitionStyle: "fade",
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ],
    });

    // 2 Item
    // Basic Owl-carousel 2 item 
    $(".owl-2").owlCarousel({
        items: 2,
        slideSpeed: 300,
        itemsDesktop: [1199, 2],
        itemsMobile: [479, 1],
        pagination: false,
        navigation: false,
        autoPlay: 10000,
    });

    // Owl-carousel 2 item with navigation
    $(".owl-2-nav").owlCarousel({
        items: 2,
        slideSpeed: 300,
        navigation: true,
        pagination: false,
        itemsDesktop: [1199, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });

    // Owl-carousel 2 item with pagination
    $(".owl-2-pag").owlCarousel({
        navigation: false,
        items: 2,
        pagination: true,
        itemsDesktop: [1199, 2],
        itemsMobile: [479, 1],
    });

    // Owl-carousel 2 item with all control
    $(".owl-2-all").owlCarousel({
        items: 2,
        slideSpeed: 300,
        navigation: true,
        pagination: true,
        itemsDesktop: [1199, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });

    // 3 Item
    // Basic Owl-carousel 3 item 
    $(".owl-3").owlCarousel({
        items: 3,
        slideSpeed: 300,
        itemsDesktop: [1199, 3],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        pagination: false,
        navigation: false,
        autoPlay: 10000,
    });

    // Owl-carousel 3 item with navigation
    $(".owl-3-nav").owlCarousel({
        items: 3,
        slideSpeed: 300,
        navigation: true,
        pagination: false,
        itemsDesktop: [1199, 3],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });

    // Owl-carousel 3 item with pagination
    $(".owl-3-pag").owlCarousel({
        navigation: false,
        items: 3,
        pagination: true,
        itemsDesktop: [1199, 3],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
    });

    // Owl-carousel 3 item with all control
    $(".owl-3-all").owlCarousel({
        items: 3,
        slideSpeed: 300,
        navigation: true,
        pagination: true,
        itemsDesktop: [1199, 3],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });

    // 4 Item
    // Basic Owl-carousel 4 item 
    $(".owl-4").owlCarousel({
        items: 4,
        slideSpeed: 300,
        itemsDesktop: [1199, 4],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        pagination: false,
        navigation: false,
        autoPlay: 10000,
    });

    // Owl-carousel 4 item with navigation
    $(".owl-4-nav").owlCarousel({
        items: 4,
        slideSpeed: 300,
        navigation: true,
        pagination: false,
        itemsDesktop: [1199, 4],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });

    // Owl-carousel 4 item with pagination
    $(".owl-4-pag").owlCarousel({
        navigation: false,
        items: 4,
        pagination: true,
        itemsDesktop: [1199, 4],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
    });

    // Owl-carousel 4 item with all control
    $(".owl-4-all").owlCarousel({
        items: 4,
        slideSpeed: 300,
        navigation: true,
        pagination: true,
        itemsDesktop: [1199, 4],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });

    // 5 Item
    // Basic Owl-carousel 5 item 
    $(".owl-5").owlCarousel({
        items: 5,
        slideSpeed: 300,
        itemsDesktop: [1199, 5],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        pagination: false,
        navigation: false,
        autoPlay: 10000,
    });

    // Owl-carousel 5 item with navigation
    $(".owl-5-nav").owlCarousel({
        items: 5,
        slideSpeed: 300,
        navigation: true,
        pagination: false,
        itemsDesktop: [1199, 5],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });

    // Owl-carousel 5 item with pagination
    $(".owl-5-pag").owlCarousel({
        navigation: false,
        items: 5,
        pagination: true,
        itemsDesktop: [1199, 5],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
    });

    // Owl-carousel 5 item with all control
    $(".owl-5-all").owlCarousel({
        items: 5,
        slideSpeed: 300,
        navigation: true,
        pagination: true,
        itemsDesktop: [1199, 5],
        itemsTablet: [992, 2],
        itemsMobile: [479, 1],
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ]
    });


    //Owl Carousel thumnail Gallery
    var shopslider = $("#shop-slider");
    var shopsliderthumb = $("#shop-slider-thumb");

    shopslider.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
        navigationText: [
            "<i class='ti-angle-left prev'></i>",
            "<i class='ti-angle-right next'></i>"
        ],
    });

    shopsliderthumb.owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 5],
        itemsTablet: [768, 4],
        itemsMobile: [479, 4],
        pagination: false,
        responsiveRefreshRate: 100,
        afterInit: function(el) {
            el.find(".owl-item").eq(0).addClass("active");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $("#shop-slider-thumb")
            .find(".owl-item")
            .removeClass("active")
            .eq(current)
            .addClass("active")
        if ($("#shop-slider-thumb").data("owlCarousel") !== undefined) {
            center(current)
        }
    }

    $("#shop-slider-thumb").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        shopslider.trigger("owl.goTo", number);
    });

    function center(number) {
        var shopsliderthumbvisible = shopsliderthumb.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in shopsliderthumbvisible) {
            if (num === shopsliderthumbvisible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > shopsliderthumbvisible[shopsliderthumbvisible.length - 1]) {
                shopsliderthumb.trigger("owl.goTo", num - shopsliderthumbvisible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                shopsliderthumb.trigger("owl.goTo", num);
            }
        } else if (num === shopsliderthumbvisible[shopsliderthumbvisible.length - 1]) {
            shopsliderthumb.trigger("owl.goTo", shopsliderthumbvisible[1])
        } else if (num === shopsliderthumbvisible[0]) {
            shopsliderthumb.trigger("owl.goTo", num - 1)
        }

    }


    //Quantity Controler
   $(function() {

		// Increase
		jQuery(document).on('click', '.qtyplus', function(e) {
			e.preventDefault();
			var quantityInput = jQuery(this).parents('.quantity-form').find('input.qty'),
				newValue = parseInt(quantityInput.val(), 10) + 1,
				maxValue = parseInt(quantityInput.attr('max'), 10);

			if (!maxValue) {
				maxValue = 9999999999;
			}

			if ( newValue <= maxValue ) {
				quantityInput.val(newValue);
				quantityInput.change();
			}
		});

		// Decrease
		jQuery(document).on('click', '.qtyminus', function(e) {
			e.preventDefault();
			var quantityInput = jQuery(this).parents('.quantity-form').find('input.qty'),
				newValue = parseInt(quantityInput.val(), 10) - 1,
				minValue = parseInt(quantityInput.attr('min'), 10);
			
			if (!minValue) {
				minValue = 1;
			}

			if ( newValue >= minValue ) {
				quantityInput.val(newValue);
				quantityInput.change();
			}
		});

	});


    //Portfolio Isotope	
    if ($.fn.isotope && $.fn.imagesLoaded && ($('.portfolio').length > 0)) {

        $('.portfolio-isotope').imagesLoaded(function() {

            $('.iso-button').on("click", function() {
                $('.iso-button').removeClass('iso-active');
                $(this).addClass('iso-active');

                var selector = $(this).attr('data-filter');
                container.isotope({
                    filter: selector
                });

                return false;
            });

            $(window).resize(function() {
                container.isotope({});

            });
        });
    }

    var container = $('.portfolio-isotope');

    container.imagesLoaded(function() {
        
		$('.portfolio-isotope').isotope({
            itemSelector: '.folio-item',
			transitionDuration: '0.5s',
			layoutMode: 'fitRows'
        });
		$('.portfolio-isotope.masonry').isotope({
            layoutMode: 'masonry'
        });
    });


    //Blog Masonry	
    $('.blog-post.masonry, .layout-masonry').imagesLoaded(function() {
        $('.blog-post.masonry, .layout-masonry').isotope({
            layoutMode: 'masonry',
            transitionDuration: '0.3s'
        });
    });

});