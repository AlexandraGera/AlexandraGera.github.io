$(function() {
	
//Carousel
$('.jcarousel').jcarousel();
$('.jcarousel').jcarouselAutoscroll({
	interval: 3000,
	target: '+=1',
	autostart: true
});

$('.jcarousel-prev').click(function() {
	$('.jcarousel').jcarousel('scroll', '-=1');
});
$('.jcarousel-next').click(function() {
	$('.jcarousel').jcarousel('scroll', '+=1');
});


$('.jcarousel-pagination').jcarouselPagination({
	item: function(page) {
		return '<a href="#' + page + '">' + page + '</a>';
	}
});

//Selectbox
var params = {
	changedEl: ".lineForm select",
	scrollArrows: true
}

cuSel(params);

//Checkbox
$(".check-js").mousedown(
	function() {
		changeCheck($(this));
	});

$(".check-js").each(
	function() {
		changeCheckStart($(this));
	});

function changeCheck(el){
	var el = el,
	input = el.find("input").eq(0);

	if(!input.attr("checked")) {
		el.css("background-position","0 -17px");    
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");    
		input.attr("checked", false)
	}
	return true;
};

function changeCheckStart(el){
	var el = el,
	input = el.find("input").eq(0);
	if(input.attr("checked")) {
		el.css("background-position","0 -17px");    
	}
	if (input.attr("disabled")) {
		el.addClass( "check_disabled" );
		return true;
	};
};

//Menu dropdown
$( '.dropdown' ).hover(
	function(){
		$(this).children('.submenu').slideDown(200);
		$('.submenu').animate({
			backgroundColor:"rgb(225,75,75)"
		}, 500 );
	},
	function(){
		$(this).children('.submenu').slideUp(200);
		$('.submenu').animate({
			backgroundColor:"rgb(225,125,125)"
		}, 500 );
	}
	);

});


