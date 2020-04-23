// 悬浮导航
let arr = []
$('.box>div').eq(4).nextAll().each(function (i, n) {
    if ($(this).hasClass("advertising")) {
        return true;
    }
    arr[arr.length] = $(this).offset().top - 0.921875;
});

$(window).on('scroll', function () {
    for (let i = 0; i < arr.length; i++) {
        if ($(window).scrollTop() >= arr[i]) {
            $('.list-box div div').eq(i).css('background-color', 'rgb(0, 161, 214)').siblings().css('background-color', 'white')
        }
    }
})

// 事件委托未完成
// $('.list-box>div').on('click', $('.list-box div div'), function () {

//     $(window).animate({ scrollTop: $('.box>div').eq($(this).index() + 5).scrollTop() }, 1000)
// })

$('.list-box div div').on('click', function () {

    $(window).scrollTop($('.scroll').eq($(this).index() + 5).offset().top)
})
// BUG: 当从下往上滚动时偶尔无法自动选中直播这一行  位置:悬浮导航右侧