$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplayTimeout:1000,
    responsive: {
        0: {
            items: 1,
            nav: false,
            nav: true,
            loop: true,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            loop: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})