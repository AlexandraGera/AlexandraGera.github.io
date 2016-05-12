//Carousel

(function($){
	$.fn.carousel= function(){
		var elementsList = this;
		var leftUIEl = $('.carousel-arrow-left');
		var rightUIEl = $('.carousel-arrow-right');
		
		var pixelsOffset = 240;
		var currentLeftValue = 0; 
		var elementsCount = elementsList.find('li').length;
		var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
		var maximumOffset = 0;


		leftUIEl.on('click', function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += 240;
				elementsList.animate({ left : currentLeftValue + "px"}, 500);
			}      
		});

		rightUIEl.on('click', function() {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= 240;
				elementsList.animate({ left : currentLeftValue + "px"}, 500);
			}   
		});
	}
})(jQuery);