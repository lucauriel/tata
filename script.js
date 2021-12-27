$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeaddClass("show");
        }
    })

    //slide up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    // toggle menu/navar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    //typing animation scripts
    var typed = new Typed(".typing", {
        strings: ["Dita Nurul Zahra", "dita", "tata", "ditanrlzhr", "dzzzhra", "k00kiekim", "dumps' ta", "xuxiteixx", "ta'"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Tata", "tAta", "taTa", "tatA", "tata", "TATA", "TATAAAAAAAAAAAAAAAA"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

    })
    $('.carousel2').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
        }

    })
});

