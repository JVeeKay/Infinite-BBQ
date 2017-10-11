(function ($) {
    'use strict';
    $('li').on("click", function () {
        $(this).next().slideToggle(400);
        $('.panel').not($(this).next()).slideUp('slow');
    });
}(jQuery));
