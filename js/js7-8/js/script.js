$ (function(){
	
//Tabs

$( "a" ).click(function( event ) {
	event.preventDefault();
});

var itemMenu= $(".item_menu");

$(".link1").addClass('active');
$(".info1").show();

itemMenu.on('click' , function(){
	$(this).children().addClass('active');
	$(this).siblings().children().removeClass('active');
	var infoBox= $(this).children().attr("href");
	$(infoBox).show();
	$(infoBox).siblings(".info_box").hide();
});

//Form
var textHelp=$('.text-help');
var button=$('button');
var input=$('input');

input.hover(
	function() {
		$(this).siblings().show();
	},function() {
		$(this).siblings().hide();
	}
	);

button.on('click' , function(){
	textHelp.show();
});
})