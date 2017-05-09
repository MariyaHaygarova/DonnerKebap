(function ($) {
	'use strict';

/*---------------------
	jQuery MeanMenu
----------------------*/
	jQuery('nav#dropdown').meanmenu();

/*-------------------------------
	wow js active
--------------------------------*/
	new WOW().init();
/*-------------------------------
	owl active
---------------------------------*/
	$('.testimonial-slide').owlCarousel({
		autoPlay: true,
		slideSpeed: 500,
		pagination: true,
		navigation: false,
		items : 1,
		/* transitionStyle : "fade", */      /* [this code for animation]*/
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet : [768,1],
		itemsMobile : [479,1],
	});

/*-------------------------------
	Our Chef owl slider
---------------------------------*/
	$('.chef-slide').owlCarousel({
		autoPlay: true,
		slideSpeed: 500,
		pagination: false,
		navigation: true,
		items : 3,
		/* transitionStyle : "fade", */      /* [this code for animation]*/
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet : [768,3],
		itemsMobile : [479,1],
	});


/*----------------------------------------
	price-slider active
-----------------------------------------*/
	$("#slider-range").slider({
		range: true,
		min: 40,
		max: 600,
		values: [ 60, 570 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $ " + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0) +
		" - $" + $("slider-range").slider("values", 1) );

/*---------------------------------------------------------------------------------------
	scrollUp
--------------------------------------------------------------------------------------*/
		   $(window).scroll(function() {
      if ($(this).scrollTop() > $(this).height()) {
         $('.top').addClass('active');
      } else {
         $('.top').removeClass('active');
      }
    });
    $('.top').click(function() {
      $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });
/*-------------------------------------------------------------------------------------
	Doner Kebap About Image
--------------------------------------------------------------------------------------*/
	$('.donerkebap-image ul li').on('click', function(){
		$('.donerkebap-image ul li .image-details').toggleClass('active');
	});
/*-------------------------------------------------------------------------------------
	Counter
--------------------------------------------------------------------------------------*/
	$('.counter').each(function () {
    $(this).prop('Counter',1000).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


})(jQuery);