$(function () {
    $(window).scroll(function () {
        let top = $(window).scrollTop();
        top > 100 ? $('.to_top').fadeIn() : $('.to_top').fadeOut(0)
    });
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600);
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .text_dots li').eq(0).addClass('on');
        $('.main_visual .text_dots li').eq(c).addClass('on').siblings().removeClass('on');
    })
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        pauseOnFocus: false,
        fade: true,
    });
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');

    })

    // section Collection
    $('.collection_slide').slick({
        arrows: false,
        asNavFor: '.colist_slide',
        fade: true,
    });
    $('.colist_slide').slick({
        arrows: false,
        asNavFor: '.collection_slide',
        slidesToShow: 4,
        slidesToScroll: 1,
    });
    $('.main_collection .arrows .left').on('click', function () {
        $('.collection_slide').slick('slickPrev');
    })
    $('.main_collection .arrows .right').on('click', function () {
        $('.collection_slide').slick('slickNext');
    })

    //section Timepiece
    $('.tp_piece li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tp_piece li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.tp_desc li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $(function () {
        $('.main_customer .itm').on('click', function (e) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
        });
    });


    //mobile
    $('.mobile_menu').on('click', function () {
        $('.head_customer').toggleClass('on');
        $('.mobile_menu').toggleClass('on');
    });
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.head_customer').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub').stop().slideUp();
        }
    })


    $(window).on('resize', function () {
        $('.head_customer').removeClass('on');
    })
    $('.head_customer').on('wheel', function (e) {
        if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    });
});