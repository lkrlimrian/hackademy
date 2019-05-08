$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      responsive:{
        0:{
          items: 1
        },
        768:{
          items: 2
        },
        1360:{
          items: 3
        }
      }
  });
});