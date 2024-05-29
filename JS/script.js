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

const botonSumar = document.getElementById('sumar');
const botonRestar = document.getElementById('restar');
const contador = document.getElementById('contador');
let valorContador = 0;
botonSumar.addEventListener('click', function() {
	valorContador++;
	contador.innerText = valorContador;
});
botonRestar.addEventListener('click', function() {
	if (valorContador > 0) {
		valorContador--;
		contador.innerText = valorContador;
	}
});

const botonSumar1 = document.getElementById('sumar1');
const botonRestar1 = document.getElementById('restar1');
const contador1 = document.getElementById('contador1');
let valorContador1 = 0;
botonSumar1.addEventListener('click', function() {
	valorContador1++;
	contador1.innerText = valorContador1;
});
botonRestar1.addEventListener('click', function() {
	if (valorContador1 > 0) {
		valorContador1--;
		contador1.innerText = valorContador1;
	}
});