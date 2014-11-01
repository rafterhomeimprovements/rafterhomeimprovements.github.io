$(document).ready(function(){
    $('.photo-slider').slick({
      infinite: true,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
  	  autoplaySpeed: 2000,
      dots: true,
      // variableWidth: true,
      responsive: [
      	{
      		breakpoint:1024,
      		settings: {
      			arrows: false,
      			slidesToShow: 3,
      		}
      	},
      	{
      		breakpoint:600,
      		settings: {
      			arrows: false,
      			slidesToShow: 1
      		}
      	}
      ]
    });
});