$(document).ready(function(){

    $("a[rel^='prettyPhoto']").prettyPhoto();

// EnlargeIt

    enl_ani = 2;
    enl_brdcolor = '#ae3e62';
    enl_titletxtcol = '#ffffaa';
    enl_brdsize = 6;
    enl_maxstep = 20;
    enl_speed = 14;
    enl_shadowintens = 35;
    enl_shadowcolor = 'black';
    enl_shadowsize = 0;
    enl_center = 0;
    enl_dark = 0;
    enl_opaglide = 1;
    enl_buttonurl[0] = 'prev';
    enl_buttontxt[0] = 'Предыдущее изображение (клавиша "влево")';
    enl_buttonoff[0] = -180;
    enl_buttonurl[1] = 'next';
    enl_buttontxt[1] = 'Следующее изображение (клавиша "вправо")';
    enl_buttonoff[1] = -198;
    enl_buttonurl[2] = 'close';
    enl_buttontxt[2] = 'Закрыть (клавиша Esc)';
    enl_buttonoff[2] = -126;

    // return false and set background for a link
    $('.item_photo').each(function() {
        $(this).click(function() {
            return false;
        });
        var $back = $(this).children('img').prop('src');
        $(this).attr('style', 'background:url('+$back+');');
    });
    //add onclick anf longdesc for an image
    $('.item_photo img').each(function() {
        $(this).attr('onclick','enlarge(this)');
        var $longdesc = $(this).parent('a').prop('href');
        $(this).attr('longdesc',$longdesc);
    });

});