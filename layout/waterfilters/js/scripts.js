jQuery(document).ready(function () {

// Fancybox

    jQuery(".fancybox").fancybox();

//Cities select in the header

    jQuery(".cities").ikSelect({
        customClass: "cities_select",
        ddCustomClass: "cities_select_block",
        filter: true
    });

// 3 reasons in the header

    jQuery(".reasons .panel").hide();
    jQuery(".reasonclick").click(function () {
        jQuery(".reasons .panel").slideToggle(500);

        if (jQuery(".reasonclick").hasClass("active")) {
            jQuery(this).delay(500).queue(function () {
                jQuery(this).removeClass('active');
                jQuery(this).dequeue();
            });
        } else {
            jQuery(this).addClass("active");
        }
    });

//Timer carousel

    jQuery('#timer').jcarousel({
        auto: 4,
        wrap: 'circular',
        scroll: 1,
        initCallback: mycarousel_initCallback
    });

//Timer carousel mouse wheel action

    jQuery(".jcarousel-container")
        .mousewheel(function (event, delta) {
            if (delta > 0)
                jQuery(".jcarousel-next").click();
            else if (delta < 0)
                jQuery(".jcarousel-prev").click();
            return false;
        });


});

//Timer carousel users' behavior action

function mycarousel_initCallback(carousel) {
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function () {
        carousel.startAuto(0);
    });
    carousel.buttonPrev.bind('click', function () {
        carousel.startAuto(0);
    });
    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function () {
        carousel.stopAuto();
    }, function () {
        carousel.startAuto();
    });
}
