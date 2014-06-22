$(document).ready(function () {

// Replace rel attribute to data-rel for validation
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });

// Dropdow top menu

    var bottomMenu = $('#bottomNav .sub_menu'),
        subMenuHeight = '-' + bottomMenu.height() + 'px';

    bottomMenu.css('top', subMenuHeight);

    $('.dropdown li ul').hide();
    $('.dropdown li').hover(function () {
            $('ul', this).stop().slideToggle(300);
        }
    );


// Top slider initialisation

    $('.bxslider').bxSlider({
        pager: false
    });


// Index page carousel initialisation

    $('.bxcarousel').bxSlider({
        pager: false,
        //auto: true,
        slideWidth: 180,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1
    });


// Blog page carousel initialisation

    $('.blog_bxcarousel').bxSlider({
        pager: false,
        //auto: true,
        slideWidth: 200,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1
    });


// Index page carousel - darken-on-hover effect

    $('.bxcarousel li').each(function () {
        $(this).find('img').wrap('<div class="darken" />');
        $(this).hover(function () {
            $(this).find('img').fadeTo(300, 0.7);
        }, function () {
            $(this).find('img').fadeTo(300, 1);
        });
    });


// Fancybox initialisation

    $('.fancybox').fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

});