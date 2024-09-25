$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.header').addClass('white');
	}
	else {
		$('.header').removeClass('white');
	}
})
$(document).ready(function(){
	$('.partner-logos').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});
  });

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}