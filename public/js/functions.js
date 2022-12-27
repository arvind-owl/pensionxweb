/* Loader
============================================== */
$(window).on("load", function() {
    "use strict";
    $(".loader").fadeOut(800);
});

$(window).scroll(function() {  
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
     $(".min-h-screen.max-h-screen.min-w-screen.max-w-screen.flex.flex-col").addClass("darkHeader");
    } else {
     $(".min-h-screen.max-h-screen.min-w-screen.max-w-screen.flex.flex-col").removeClass("darkHeader");
    }
   });
jQuery(function($) {
    "use strict";

    /* Back to top
    ============================================== */
    var amountScrolled = 0;
    var backBtn = $("a.back-to");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > amountScrolled) {
            backBtn.fadeIn("fast");
        } else {
            backBtn.fadeOut("fast");
        }
    });
    backBtn.on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        return false;
    });



    /* Puch Menu
    ============================================== */
    var $menuLeft = $(".pushmenu-left");
    var $menuRight = $(".pushmenu-right");
    var $toggleleft = $("#menu_bars.left");
    var $toggleright = $("#menu_bars.right");
    var pushbody = $(".pushmenu-push");
    $toggleleft.on("click", function() {
        $(this).toggleClass("active");
        pushbody.toggleClass("pushmenu-push-toright");
        $menuLeft.toggleClass("pushmenu-open");
        return false;
    });
    $toggleright.on("click", function() {
        $(this).toggleClass("active");
        pushbody.toggleClass("pushmenu-push-toleft");
        $menuRight.toggleClass("pushmenu-open");
        return false;
    });

    /* Equalise columns
    ============================================== */
    $(".item").each(function() {
        var highestBox = 0;
        $(".col-md-6", this).each(function() {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $(".col-md-6", this).height(highestBox);

    });


    /* Toggle button for more options
    ============================================== */
    $(".show-hide-detail").hide();
    $(".show-hide-detail:first").show();
    $(".show-hide-btn a").on('click', function() {
        var thid_data = $(this).attr('data-id');
        $(".show-hide-btn a").removeClass('active');
        $(this).addClass('active');
        if (!$("#" + thid_data).is(":visible")) {
            $(".show-hide-detail").hide();
            $("#" + thid_data).show();
        }
    });


    /* Vertical center
     ============================================== */
    var verticalCenterHeight = function() {
        var screenHeight = $(window).height();
        $(".vertical-center").each(function() {
            $(this).css('top', ($(this).parent().height() - $(this).height()) / 2);
        });
    }
    window.onload = verticalCenterHeight;
    window.onresize = verticalCenterHeight;


    /* Left Menu
    ============================================== */
    $(document).ready(function() {
        


        var lastId, $targetLink = $('.block-menu a[href^="#"]', document.body);
        $($targetLink, document.body).on('click', function(e) {
            $targetLink.removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            var pointer = $target.offset().top - 120;
            $('html, body').stop().animate({
                'scrollTop': pointer
            }, 900, 'swing', function() {});
        });
        var lastId, topMenu = $(".block-menu", document.body),
            topMenuHeight = 160,
            menuItems = topMenu.find('a[href^="#"]');
        var scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
        $(window).scroll(function() {

            if (topMenu.hasClass('affix')) {
                var fromTop = $(this).scrollTop() + topMenuHeight;
                var cur = scrollItems.map(function() {
                    if ($(this).offset().top < fromTop)
                        return this;
                });
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";
                if (lastId !== id) {
                    lastId = id;
                    menuItems.removeClass("active");
                    menuItems.filter("[href=#" + id + "]").addClass("active");
                }
            }
        });
    });

    /* Owl all sliders
    ============================================== */
    
    $("#about_single").owlCarousel({
          
        autoPlay: 3000,
        items: 3,
        pagination: true,
        navigation: true,
        navigationText: ["prev","next"],
        stopOnHover:true,
        responsive:true,
		itemsDesktop: [5000, 1],
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });

    
                var prev = $('.owl-prev');
                prev.on('click', function()
                {
                  
                    $("#about_single").trigger('prev.owl.carousel');
                });
        

                var next = $('.owl-next');
                next.on('click', function()
                {
                  
                    $("#about_single").trigger('next.owl.carousel');
                });
           
           
                
           
    /* Cubeportfolio
    ============================================== */
    $("#projects").cubeportfolio({
        filters: "#project-filter",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "slideDelay",
        gapHorizontal: 50,
        gapVertical: 20,
        gridAdjustment: "responsive",
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
    });
    $("#nospace").cubeportfolio({
        filters: "#nospace-filter",
        layoutMode: "grid",
        defaultFilter: "*",
        animationType: "slideDelay",
        gapHorizontal: 50,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 2
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: true,
    }); 
    
    

   
});

/* Wow
============================================== */
new WOW().init();
