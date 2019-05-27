// GNB 메뉴

$(function(){
    var $depth1Link = $('.depth1 > li > a')

    if (location.pathname.indexOf('main.html') != -1) {
        $depth1Link.eq(0).addClass('on');
    } else if(location.pathname.indexOf('phone-buy-detail.html') != -1){
        $depth1Link.removeClass('on');
        $depth1Link.eq(2).addClass('on');
    } 
});

$(function(){
    var $menuBtn = $('.menu-btn')
    var $gnbWrap = $('.gnb-container')
    var $bg = $('.dim')
    var $depth1Link = $('.depth1 > li > a')
    var $depth2Link = $('.depth2 > li > a')
    var $body = $('html,body');
    var $window = $(window);

    $menuBtn.on('click',function(){
        $body.addClass('scroll-off').on('scroll touchmove',function(e){
            e.preventDefault();
        });
        $gnbWrap.addClass('on');
        $bg.addClass('on');
    });

    $depth1Link.on('click',function(e){

        e.preventDefault();

        var $this = $(this)
        
        if($this.hasClass('on')){
           
        } else {
            $depth1Link.removeClass('on').next('.depth2').removeClass('on');
            $this.addClass('on').next('.depth2').addClass('on');
        }
    });

    $depth2Link.on('click',function(e){

        e.preventDefault();

        var $this = $(this)

        $this.toggleClass('on').siblings('.depth3').slideToggle();
    });

    $('.close-btn, .dim').on('click',function(){
        $gnbWrap.removeClass('on');
        $bg.removeClass('on');
        $body.removeClass('scroll-off').off('scroll touchmove');
    });
});



$(function(){

    $(".banner-slide").touchSlider({
        controls:false,
        paging:false,
        autoplay:{
            enable:true,
            pauseHover:false,
            addHoverTarget:'',
            interval:5000,
        },
      
        counter: function(e) {
            $(this).children('.count').children('.box').children('.current').html(e.current);
        }
    });
});

$(function(){

    $(".touch-slide").touchFlow({
        paging: false,
        controls: false,
        scrollbar: true,
        // scrollbarAutoHide: true,
    });
});

$(function(){

    $(".usim .plan-slide").touchSlider({
        resize: false,
        counter: function(){
            
            var $listHeight = $('.usim .plan-slide > ul > li').height();
            var $slide = $('.usim .plan-slide');
            var $moreBtn = $('.usim .plan-btn-more');

            $slide.css({height : $listHeight});
    
            $moreBtn.on('click',function(e){

                e.preventDefault();
             
                var $this = $(this);
                var $hide = $this.siblings('.contents-wrap > ul').children('.list-item').hasClass('hide');
                var $listItem = $('.usim .list-item').height();
                var $indexHeight = $this.siblings('.contents-wrap > ul ').children('.hide').index();
                var $he = $listHeight + $listItem * $indexHeight - 13
        
                if($hide){                    
                    $this.siblings('.contents-wrap > ul').children('.list-item').removeClass('hide');
                    
                    $slide.css({height:$he});
                    
                } else {
                    $this.addClass('hide');
                }
            });
            
            
        }
    });

    $(".phone .plan-slide").touchSlider({
        resize: false,
        counter: function(){
            
            var $listHeight = $('.phone .plan-slide > ul > li').height();
            var $slide = $('.phone .plan-slide');
            var $moreBtn = $('.phone .plan-btn-more');

            $slide.css({height : $listHeight});
    
            $moreBtn.on('click',function(e){

                e.preventDefault();

                var $this = $(this);
                var $hide = $this.siblings('.contents-wrap > ul').children('.list-item').hasClass('hide');
                var $listItem = $('.phone .list-item').height();
                var $he = $listHeight + $listItem - 37
                

                console.log($listHeight + $listItem);
        
                if($hide){                    
                    $this.siblings('.contents-wrap > ul').children('.list-item').removeClass('hide');
                    $slide.css({height:$he});
                    $this.addClass('hide');
                } else {
                    
                }
            });
            
            
        }
    });
});

$(function(){

    var $window = $(window);
    var $tabLink1 = $('.tab-link1')
    var $tabLink2 = $('.tab-link2')

    $window.on('scroll',function(){

        var a = $window.scrollTop() + $window.height() / 2;

        var $tabMenu = $('.tab-menu');
        var $tabContainer = $('.tab-container')

        $tabContainer.each(function(){

            var $this = $(this);

            var b = $this.offset().top

            var index = $this.index($tabContainer);

            if( a >= b ){
                $tabMenu.children('ul').children('li').removeClass('on');
                $this.children($tabMenu).children('ul').children('li').eq(index).addClass('on');
                $('.tab-contents').removeClass('on');
                $this.children('.tab-contents').addClass('on');
            }else{
                $this.children($tabMenu).children('ul').children('li').eq(index).removeClass('on');
                $this.children('.tab-contents').removeClass('on');
            }
        });
    })

    $tabLink1.on('click',function(e){

        e.preventDefault();

        var position = $('#usim-container').offset().top - 59;

        $('html,body').stop().animate({scrollTop:position},500);
    });

    $tabLink2.on('click',function(e){

        e.preventDefault();
 
        var position = $('#phone-container').offset().top - 59;

        $('html,body').stop().animate({scrollTop:position},500);
        
    });

});

$(function(){

    $(".review-slide").touchSlider({
        controls: false,
    });
});

$(function(){

    $(".service-slide").touchSlider({
        controls: false,
        paging: false,
        btn_prev: $('.slide-prev'),
        btn_next: $('.slide-next'),
    });
});

$(function(){

    var $topBtn = $('.top-link');
    
    $topBtn.on('click',function(e){

        e.preventDefault();

        var position = $('html,body').offset(); 

        $('html,body').stop().animate({scrollTop : position.top},500);
    });

    $(window).scroll(function(){

        var position = $(window).scrollTop();
        var $header = $('.common-header');

        if( position ){
            $('.top-link').addClass('on');
        } else {
            $('.top-link').removeClass('on');
        }
    });
});



$(function(){

    var $quickMenu = $('.quick-menu .sub-link');
    var $dim = $('.section-dim');
    var $subDepth2 = $('.sub-depth2');
    var $body = $('html,body');

    $quickMenu.on('click',function(e){

        e.preventDefault();
    
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $body.removeClass('scroll-off').off('scroll touchmove');
            $dim.removeClass('on');
            $subDepth2.removeClass('on');
        } else {
            $(this).addClass('on');
            $body.addClass('scroll-off').on('scroll touchmove',function(e){
                e.preventDefault();
            });
            $dim.addClass('on');
            $subDepth2.addClass('on');
        }
        
    });

    $dim.on('click',function(){
        $body.removeClass('scroll-off').off('scroll touchmove');
        $dim.removeClass('on');
        $subDepth2.removeClass('on');
        $quickMenu.removeClass('on');
    });

});

$(function(){
    $(".phone-slide").touchSlider({
        controls: false,
        paging: true,
    });
});

$(function(){
    $(".event-slide").touchSlider({
        controls: false,
        paging: true,
        autoplay:{
            enable:true,
            pauseHover:false,
            addHoverTarget:'',
            interval:7000,
        },
    });
});

$(function(){

    var $more = $('.payment-menu .more');    
    var $wrap = $('.payment-menu .wrap');
    var $he = $(window).height() / 2.2
    var $dim = $('.dim');
    var $info = $('.payment-menu .info');
    var $payment = $('.payment-menu');

    $wrap.css({ height : $he });

    $more.on('click',function(e){   

        e.preventDefault();
        
        var $bottom = parseInt($info.css("bottom"));
        var $body = $('html,body');
        var $this = $(this);

        if( $bottom < 1 ){
            $info.css({ bottom : $he });
            $dim.addClass('on');
            $payment.css('z-index','202');
            $body.addClass('scroll-off').on('scroll touchmove',function(e){
                e.preventDefault();
            });
            $this.addClass('on');
        } else {
            $info.css({ bottom : 0 });
            $dim.removeClass('on');
            $payment.css('z-index','10');
            $body.removeClass('scroll-off').off('scroll touchmove');
            $this.removeClass('on');
        }
    });

    $dim.on('click',function(){
        $payment.css('z-index','10');
        $info.css({ bottom : 0 });
        $more.removeClass('on');
    });

    
    




});

$(function(){

    var $selectLink = $('.select-link')

    $selectLink.on('click',function(e){

        e.preventDefault();

        var $selectInfo = $('.select-info');

        $(this).toggleClass('on') && $selectInfo.toggleClass('on');
    });

});



//# sourceMappingURL=maps/commons.js.map
