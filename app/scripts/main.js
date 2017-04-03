console.log('\'Allo \'Allo!');

$(document).ready(function(){
  //variables
  var mapOpen = false;
  var detailsOpen = false;
  $('#map').hide();
  $('#details').hide();

  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.carousel').carousel({
      padding: 200
  });
  autoplay();

  $('#show-map').click(function(){
    if (mapOpen == false){
      $('#map').show();
      animate('#map', 'slideInDown');
      mapOpen = true;
    }
    else if (mapOpen == true){
      animate('#map', 'slideOutUp');
      mapOpen = false;
      $('#map').hide();
    }
  });
  $('#show-details').click(function(){
    if (detailsOpen == false){
      $('#details').show();
      animate('#details', 'slideInRight');
      detailsOpen = true;
    }
    else if (detailsOpen == true){
      animate('#details', 'slideOutLeft');
      detailsOpen = false;
      $('#details').hide();
    }
  });

  function animate(element, animation){
    console.log('animate');
    element = $(element);
    element.addClass('animated ' + animation);
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
    }, 2000);
  }
});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
