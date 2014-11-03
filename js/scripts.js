$( function() {
	/**
	 * Main menu.
	 */
	var mainMenu = $( ".sf-menu" );

	// Create the responsive menu by cloning the existing one.
	mainMenu.clone().addClass("rwd-menu").prependTo(".navbar-container nav");
	mainMenu.clone().addClass("mobile-menu").prependTo(".navbar-container nav");

	// Initialize the superfish menu.
	mainMenu.superfish();

	// Move logo to left
	$(".rwd-menu li:nth-child(5)").prependTo(".rwd-menu");
	$(".mobile-menu li:nth-child(1)").remove();



	/**
	 * Accordions.
	 */
	$( ".accordion-element-title" ).on( "click", function( e ) {
		e.preventDefault();

		// Get the target accordion.
		var targetAccordion = $( this ).attr( "href" );

		// Collapse all accordion elements.
		$( ".accordion-element-title" ).removeClass( "active" );
		$( ".accordion-element-content" ).hide();

		// Show the targeted element only.
		$( this ).addClass( "active" );
		$( targetAccordion ).slideDown();
	} );
} );
