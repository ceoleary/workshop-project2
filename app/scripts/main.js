console.log('\'Allo \'Allo!');

$(document).ready(function(){
  //variables
  var mapOpen = false;
  var detailsOpen = false;
  $('#map').hide();
  $('#details').hide();
  //$("#back-card").hide();

  animate('#intro', 'zoomIn', false);


  $('#show-map').click(function(){
    if (mapOpen == false){
      $('#map').show();
      animate('#map', 'slideInDown', false);
      mapOpen = true;
    }
    else if (mapOpen == true){
      animate('#map', 'slideOutUp', true);
      mapOpen = false;
      if (detailsOpen == true){
        animate('#details', 'slideOutRight', true);
        detailsOpen = false;
      }
    }
  });
  $('#show-details').click(function(){
    if (detailsOpen == false){
      console.log('show details.');
      $('#details').show();
      animate('#details', 'slideInRight', false);
      detailsOpen = true;
    }
    else if (detailsOpen == true){
      console.log('hide details.');
      animate('#details', 'slideOutRight', true);
      detailsOpen = false;
    }
  });

  function animate(element, animation, hide){
    console.log('animate');
    element = $(element);
    element.addClass('animated ' + animation);
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
        console.log('end');
        if(hide == true){
          element.hide();
        }
    }, 1000);
  }
});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
