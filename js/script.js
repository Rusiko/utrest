$(window).scroll(function(){
    if ($(window).scrollTop() > 5) {
        $('.b').addClass('scroll');
    }
    else {
        $('.b').removeClass('scroll')
    }
});