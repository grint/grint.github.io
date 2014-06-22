$(document).ready(function () {

// Select
    var params = {
        changedEl: ".bookSelect select",
        scrollArrows: true
    };
    cuSel(params);


// Left Gallery
    $('#horizontal-carousel').jcarousel();
    $('#vertical-carousel').jcarousel({
        vertical: true,
        scroll: 2
    });


// Top Gallery
    $('#topSlides').carouFredSel({
        items: 1,
        pagination: "#pager",
        auto: false,
        circular: false,
        direction: "left",
        scroll: {
            duration: 700}
    });
    $(window).resize();

});

