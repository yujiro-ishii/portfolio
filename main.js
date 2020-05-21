$(function(){

    //ページ内スクロール
    $('a[href^="."]').on("click", function(){
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "." || href == "" ? 'html' : href);
        var position = target.offset().top-100; 
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        $('.header').toggleClass('openNav');

        return false;
    });

    //ページトップに戻るボタン
    var pagetop = $('#js-page-top');
    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.on("click", function(){
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    //ハンバーガーメニュー
    $('#js-nav-toggle').on("click", function(){
        $('.header').toggleClass('openNav');
    });


    //一言自己紹介コメント
    //画面サイズは767px以下の時
    if(window.matchMedia('(max-width: 767px)').matches) {
        $(window).scroll(function(){
            if($(this).scrollTop() > 200 && $(this).scrollTop() < 350) {
                $("#js-message-1").fadeIn();
            } else {
                $("#js-message-1").fadeOut();
            }

            if($(this).scrollTop() > 1250 && $(this).scrollTop() < 1400) {
                $("#js-message-2").fadeIn();
            } else {
                $("#js-message-2").fadeOut();
            }

            if($(this).scrollTop() > 2150 && $(this).scrollTop() < 2300) {
                $("#js-message-3").fadeIn();
            } else {
                $("#js-message-3").fadeOut();
            }
        });
    
    //画面サイズは767pxより大きい時
    } else {
        $(window).scroll(function(){

            if($(this).scrollTop() > 200 && $(this).scrollTop() < 350) {
                $("#js-message-1").fadeIn();
            } else {
                $("#js-message-1").fadeOut();
            }

            if($(this).scrollTop() > 800 && $(this).scrollTop() < 950) {
                $("#js-message-2").fadeIn();
            } else {
                $("#js-message-2").fadeOut();
            }

            if($(this).scrollTop() > 1400 && $(this).scrollTop() < 1550) {
                $("#js-message-3").fadeIn();
            } else {
                $("#js-message-3").fadeOut();
            }
        });
    }

    //要素のフェードインアニメーション
    $(window).on('scroll', function(){
        $('.js-fade-trigger').each(function(){
            var scroll = $(window).scrollTop();
            var elemTop = $(this).offset().top;
            var windowHeight = $(window).height();

            if(scroll > elemTop - windowHeight / 2 - 50) {
                if($(this).hasClass('fade-element-up')) {
                    $(this).addClass('fade-up');
                } else if($(this).hasClass('fade-element-scale')) {
                    $(this).addClass('fade-scale');
                } else if($(this).hasClass('fade-elem')) {
                    $(this).find('.fade-element-scale').addClass('fade-scale');
                } else if($(this).hasClass('fade-element-left')) {
                    $(this).addClass('fade-left');
                } else if($(this).hasClass('fade-element-right')) {
                    $(this).addClass('fade-right');
                }
            }
        });
    });

    $(window).trigger('scroll');
});

