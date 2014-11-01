$(document).ready(function(){
    $('.photo-slider').slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 2,
      speed: 1000,
      autoplay: true,
  	  autoplaySpeed: 2000,
      dots: true,
      responsive: [
      	{
      		breakpoint:600,
      		settings: {
      			arrows: false,
      		}
      	}
      ]
    });
});