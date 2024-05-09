$(function(){
	$(".nav-glass").click(function(e){
		e.preventDefault();
		$(".layout").toggleClass("open");
		$(".nav-destiny-layout").toggleClass("open");
		$(".nav-guests-layout").toggleClass("open");
		$(".nav-glass-layout").toggleClass("open");
		$(".bar").toggleClass("open");
		$("nav").toggleClass("open");
		$("header").toggleClass("open");
		$("body").toggleClass("open");
	});
});

$(function(){
	$(".nav-destiny p").click(function(e){
		e.preventDefault();
		$(".layout").toggleClass("open");
		$(".nav-destiny-layout").toggleClass("open");
		$(".nav-guests-layout").toggleClass("open");
		$(".nav-glass-layout").toggleClass("open");
		$(".bar").toggleClass("open");
		$("nav").toggleClass("open");
		$("header").toggleClass("open");
		$("body").toggleClass("open");
	});
});

$(function(){
	$(".cancel").click(function(e){
		e.preventDefault();
		$(".layout").toggleClass("open");
		$(".nav-destiny-layout").toggleClass("open");
		$(".nav-guests-layout").toggleClass("open");
		$(".nav-glass-layout").toggleClass("open");
		$(".bar").toggleClass("open");
		$("nav").toggleClass("open");
		$("header").toggleClass("open");
		$("body").toggleClass("open");
	});
});


$(function(){
	$(".nav-destiny-layout").click(function(e){
		e.preventDefault();
		$(".layout-location").toggleClass("open");
		$(".nav-destiny-layout").toggleClass("border");
	});
});

$(function(){
	$(".nav-guests-layout").click(function(e){
		e.preventDefault();
		$(".layout-guests").toggleClass("open");
		$(".nav-guests-layout").toggleClass("border");
	});
});

