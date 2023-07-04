$(function () {

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .text_slide li').eq(0).addClass('on');
        $('.main_visual .text_slide li').eq(c).addClass('on').siblings().removeClass('on');
    })
    $('.main_slide').slick({
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2500,
        // speed: 500,
        pauseOnFocus: false,
        fade: true,
    });

    $('.text_slide li').on('click', function () {
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

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
});