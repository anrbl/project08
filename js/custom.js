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
});