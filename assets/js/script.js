(function ($) {

    'use strict';

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-area',
		meanScreenWidth: "768",
		meanRevealPosition: "right",
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-area");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});


	/*------------------------------------
        Overlay Close
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

	// Customer Slider 
	$('.slider-active').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		animateOut: 'slideInRight',
		animateIn: 'slideOutLeft',
		margin:10,
		nav:true,
		navText:['<i class="far fa-long-arrow-alt-left"></i>','<i class="far fa-long-arrow-alt-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})

	// Scroll-top-button
	$('.scroll-top-button').click(function(){
		$('html').animate({'scrollTop':'0px'},4000) ;
	});

	$(window).scroll(function(){

		var scroll = jQuery(window).scrollTop();

		if (scroll > 300) {
			$('.scroll-top-button').show();
		}else{
			$('.scroll-top-button').hide();
		}
	})

	// Custom Cursor 

	const Cursor = document.querySelector('.cursor');

	document.addEventListener('mousemove', e => {
		Cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px")
	})


})(jQuery);
