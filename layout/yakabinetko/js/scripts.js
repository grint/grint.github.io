$(document).ready(function () {

// Hover Effect
    $('.order b, .demo b, .butOrder b, .logo, .clients li a, .payment li a, .jcarousel-next b, .jcarousel-prev b').css({"opacity": 0});
    $('.order b, .demo b, .butOrder b, .logo, .clients li a, .payment li a, .jcarousel-next b, .jcarousel-prev b').hover(function () {
        $(this).animate({"opacity": 1}, 300);
    }, function () {
        $(this).animate({"opacity": 0}, 300);
    });


// PrettyPhoto
    // replace rel attribute to data-rel for validation
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    $("a[data-rel^='prettyPhoto']").prettyPhoto();
});