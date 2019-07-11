$(document).ready(function(){
	var touch 	= $('#touch-menu');
	var menu 	= $('.mobileMenu');


	$(touch).on('click', function(e) {
		e.preventDefault();

		menu.slideToggle();		
	});


	
	$('a','.mobileMenu').click(function() {
		var w = $(window).width();
		if(w < 790) {
			$('.mobileMenu').toggle(0);
		}
	});
		
	  

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

});