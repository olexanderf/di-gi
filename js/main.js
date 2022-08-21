$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        navigation : true,
        items: 1,
        autoplay:true,
        autoplayTimeout:3000,
        loop: true,
    });
});

$('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 300,
  });
