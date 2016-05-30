$ (function(){
	
//Tabs

$( "a" ).click(function( event ) {
	event.preventDefault();
});

var link1= $(".link1");
var link2= $(".link2");
var link3= $(".link3");
var info1= $(".info1");
var info2= $(".info2");
var info3= $(".info3");

link1.addClass('active');
info1.show();
function linkShow(linkName, contentName){
	linkName.addClass('active');
	contentName.show();
};
function linkHide(linkName1,linkName2,contentName1,contentName2){
	linkName1.removeClass('active');
	linkName2.removeClass('active');
	contentName1.hide();
	contentName2.hide();
};
link1.on('click' , function(){
	linkShow(link1, info1);
	linkHide(link2,link3,info2,info3);
});
link2.on('click' , function(){
	linkShow(link2, info2);
	linkHide(link1,link3,info1,info3);
});
link3.on('click' , function(){
	linkShow(link3, info3);
	linkHide(link2,link1,info2,info1);
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