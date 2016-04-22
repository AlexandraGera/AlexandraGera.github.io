$ (function(){
	
//Tabs

$( "a" ).click(function( event ) {
	event.preventDefault();
});

var $link1= $(".link1");
var $link2= $(".link2");
var $link3= $(".link3");
var $info1= $(".info1");
var $info2= $(".info2");
var $info3= $(".info3");

$link1.addClass('active');
$info1.show();

$link1.on('click' , function(){
	$link1.addClass('active');
	$link2.removeClass('active');
	$link3.removeClass('active');
	$info1.show();
	$info2.hide();
	$info3.hide();
});

$link2.on('click' , function(){
	$link2.addClass('active');
	$link1.removeClass('active');
	$link3.removeClass('active');
	$info2.show();
	$info1.hide();
	$info3.hide();
});

$link3.on('click' , function(){
	$link3.addClass('active');
	$link1.removeClass('active');
	$link2.removeClass('active');
	$info3.show();
	$info1.hide();
	$info2.hide();
});

//Form
var $firstname=$('.firstname');
var $lastname=$('.lastname');
var $address=$('.address');
var $help1=$('.help1');
var $help2=$('.help2');
var $help3=$('.help3');
var $button=$('button');

$firstname.hover(
	function() {
		$help1.show();
	}, function() {
		$help1.hide();
	}
	);

$lastname.hover(
	function() {
		$help2.show();
	}, function() {
		$help2.hide();
	}
	);

$address.hover(
	function() {
		$help3.show();
	}, function() {
		$help3.hide();
	}
	);

$button.on('click' , function(){
	$help1.show();
	$help2.show();
	$help3.show();
});
})