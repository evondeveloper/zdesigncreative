$(document).ready(function () {
    var carousel = $("#owl-slide-client");
    var carousel2 = $("#owl-related");
  carousel.owlCarousel({
  navigation:true,
	loop:true,
	items:2,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  navigationText: [
      "<i class='icon-angle-double-right icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
  });
  carousel2.owlCarousel({
  navigation:true,
  loop:true,
  items:4,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  navigationText: [
      "<i class='icon-angle-double-right icon-white'><</i>",
      "<i class='icon-chevron-right icon-white'>></i>"
      ],
  });

});

