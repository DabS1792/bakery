$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        waitForAnimate: true,
    });
});
