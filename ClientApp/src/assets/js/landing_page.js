$(document).ready(function() {
  $("#cardCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $("#cardCarousel .carousel-item").length;
    // console.log(totalItems);

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#cardCarousel .carousel-item")
            .eq(i)
            .appendTo("#cardCarousel .carousel-inner");
        } else {
          $("#cardCarousel .carousel-item")
            .eq(0)
            .appendTo($(this).find("#cardCarousel .carousel-inner"));
        }
      }
    }
  });

  $('#map').JSMaps({
    map: 'indonesia',
    stateClickAction: 'none',
    strokeColor: '#FFF'
  });
});
