$(document).ready(function(){

    new WOW().init();

	$('.content__link').click(function() {

		 var id = $(this).data('title');

		$('.content__item').css('display','none');

		$('#'+id).show();
	});

		 var swiper = new Swiper('.swiper-container', {
    	pagination: '.swiper-pagination',
    	direction: 'vertical',
    	slidesPerView: 1,
   		paginationClickable: true,
    	spaceBetween: 30, 
    	mousewheelControl: true,
    	onSlideChangeEnd: function(swiper) {
    		if (swiper.isEnd) {
    			swiper.disableMousewheelControl();
    		}
    		console.log(swiper.params);
    	}
	});

		var link = document.querySelector(".login-button");
	var popup = document.querySelector(".modal-content");
	var close = document.querySelector(".modal__icon-login");

	$('.login-button').on("click", function (event) {
		event.preventDefault();
		$(".modal-content").addClass("modal-content-show");

	});

	$('.modal__icon-login').on("click", function (event) {
		event.preventDefault();
		$(".modal-content").removeClass("modal-content-show");

	});



	$(".to-slider-button").on("click", function (event) {
		event.preventDefault();
		$(".modal-rates").addClass("modal-rates-show");
	});

	$(".rates-close").on("click", function (event) {
		event.preventDefault();
		$(".modal-rates").removeClass("modal-rates-show");
	});




	//-----------------------------
	//Modal-login-register---------
	//-----------------------------

	$('.register-button').on("click", function (event) {
		event.preventDefault();
		$(".modal-content-register").addClass("modal-content-register-show");
	 	
	});

	$('.modal__icon-login').on("click", function (event) {
		event.preventDefault();
		$(".modal-content-register").removeClass("modal-content-register-show");
	});

	$(".log-button").on("click", function (event) {
		event.preventDefault();
		$("modal-content-register").addClass()
	});
		 
	var owl = $('.reviews-carousel');

	owl.owlCarousel({
	    loop: true,
	    rewind: true,
	    margin: 10,
	    nav: false,
	    items: 1,
	    onInitialized: function(event) {
	    	var element   = event.target;         // DOM element, in this example .owl-carousel
			var name      = event.type;           // Name of the event, in this example dragged
		    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
		    var items     = event.item.count;     // Number of items
		    var item      = event.item.index;     // Position of the current item
		    // Provided by the navigation plugin
		    var pages     = event.page.count;     // Number of pages
		    var page      = event.page.index;     // Position of the current page
		    var size      = event.page.size;      // Number of items per page

		    console.log(item)

		    $('.reviews-photos').find('img').removeClass('is-active').eq((item-2 >= 0)? item - 2 :items - (item-2)).addClass('is-active');


	    },
	    onChanged: function(event) {

	    	var element   = event.target;         // DOM element, in this example .owl-carousel
			var name      = event.type;           // Name of the event, in this example dragged
		    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
		    var items     = event.item.count;     // Number of items
		    var item      = event.item.index;     // Position of the current item
		    // Provided by the navigation plugin
		    var pages     = event.page.count;     // Number of pages
		    var page      = event.page.index;     // Position of the current page
		    var size      = event.page.size;      // Number of items per page

		    console.log(item)

		   $('.reviews-photos').find('img').removeClass('is-active').eq((item-2 >= 0)? ((item-1>items)?0:item - 2) : (items - (item-2))).addClass('is-active');;

	    }
	});

	 var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    direction: 'vertical',
	    slidesPerView: 1,
	    paginationClickable: true,
	    spaceBetween: 30,
	    mousewheelControl: true,
	    paginationBulletRender: function (swiper, index, className) {
				return '<span class="' + className + '">0' + (index + 1) + '</span>';
			},
	});
});

