// --------------------------------------------------------------------------
	// Owl Carousel
	// --------------------------------------------------------------------------

	var owl = $('.reviews-carousel');

	owl.owlCarousel({
	    loop: false,
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

		    //$('.reviews-photos').find('img').removeClass('is-active').eq(item).addClass('is-active');

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

		    //$('.reviews-photos').find('img').removeClass('is-active').eq(item).addClass('is-active');

	    }
	});

	// $('.reviews-carousel-prev').click(function() {
	//     owl.trigger('prev.owl.carousel');
	// });

	// $('.reviews-carousel-next').click(function() {
	//     owl.trigger('next.owl.carousel');
	// });