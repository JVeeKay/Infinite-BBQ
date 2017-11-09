$(document).ready(function ($) {
    'use strict';
    $('li').on("click", function () {
        $(this).next().slideToggle(400);
        $('.panel').not($(this).next()).slideUp('slow');
    });
}(jQuery));

$(document).ready("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(5000)
    .next()
    .fadeIn(5000)
    .end()
    .appendTo('#slideshow');
},  5000);
