$(function () {
    // slider
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            560: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // swipe header
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('header-swipe')
        }
        else{$('.header').removeClass('header-swipe')}
    })

    //menu
    $('.nav-icon1').click(function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('show');
        $('html,body,main').toggleClass('overflow');
        $('.js-scroll-block').toggleClass('tomat-none');

    });
    $('.menu-item').click(function () {
        $('.menu').removeClass('show');
        $('.nav-icon1').removeClass('open');
        $('html,body,main').removeClass('overflow');
    });

});