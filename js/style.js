
 $(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示back to top按鈕
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            if ($(".backtotop").hasClass("hide")) {
                $(".backtotop").toggleClass("hide");
            }
        } else {
            $(".backtotop").addClass("hide");
        }
    });

    // back to top點擊按鈕回頂部
    $(".backtotop").on("click", function (event) {
        $("html, body").animate(
            {
                scrollTop: 0
            },
            500 // 回頂部時間為 500 毫秒
        );
    });

     // 捲軸偵測距離頂部超過 50 才顯示header陰影
     $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            if ($(".header").hasClass("header_shadow")) {
                $(".header").toggleClass("header_shadow");
            }
        } else {
            $(".header").addClass("header_shadow");
        }
    });
});

$(".arrow").on("click", function (event) {
    $("html, body").animate(
        {
            scrollTop: $(project).offset().top
        },
        500 // 回頂部時間為 500 毫秒
    );
});