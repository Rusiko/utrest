$(window).scroll(function(){
    if ($(window).scrollTop() > 1) {
        $('.header_line').addClass('scroll');
        $('.header_line_2').addClass('scroll');
        $('.logo-2').addClass('scroll');
        $('.logo-1').addClass('scroll');
    }
    else {
        $('.header_line').removeClass('scroll')
        $('.header_line_2').removeClass('scroll')
        $('.logo-2').removeClass('scroll')
        $('.logo-1').removeClass('scroll')
    }
});