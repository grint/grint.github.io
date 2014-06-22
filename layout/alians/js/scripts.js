$(document).ready(function($) {
    $(".fancybox").attr('rel', 'gallery').fancybox({
        'titlePosition' : 'over',
        'titleShow': false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    //Sidebar's elements numbering
    $("#sidebar li").each(function(index) {
        //$(this).addClass('number' + index);
        index += 1;
        $(this).prepend('<span class="number">' + index + '</span>');
    });

    //Feedback bloquote
    $(".feedback .feed p:first-child").prepend('&laquo;');
    $(".feedback .feed p:last-child").append('&raquo;');

    //Calculator
    calcform = $('.calc.form');
    report = $('.report').hide();
    //new_calc = $('#new_calc').hide();
    $('#submit').click(function() {
        calcform.hide();
        report.show();
        //new_calc.show();
        //$('#term').val('');
        //$('#rate').val('');
    });
    $('#new_calc').click(function() {
        calcform.show();
        report.hide();
        //new_calc.hide();
    });
});
