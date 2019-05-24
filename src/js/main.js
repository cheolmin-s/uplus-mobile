// GNB 메뉴

$(function(){
    var $menuBtn = $('.menu-btn')
    var $gnbWrap = $('.gnb-container')
    var $bg = $('.dim')
    var $depth1Link = $('.depth1 > li > a')
    var $depth2Link = $('.depth2 > li > a')
    var $closeBtn = $('.close-btn')
    var $body = $('html,body');
    var $window = $(window);

    $menuBtn.on('click',function(){
        $body.css('overflow','hidden');
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

    $closeBtn.on('click',function(){
        $gnbWrap.removeClass('on');
        $bg.removeClass('on');
        $body.css('overflow','visible');
    });
});



$(function(){

    $(".banner-slide").touchSlider({
        controls:false,
        paging:false,
        speed:1000,
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

    $window.scroll(function(){

        var a = $window.scrollTop();

        var $tabMenu = $('.tab-menu');

        $tabMenu.each(function(){

            var $this = $(this);

            var b = $this.offset().top - 60;

            var index = $this.index($tabMenu);

            if( a === b ){
                $this.children('ul').children('li').eq(index).addClass('on');
                $this.next('.tab-contents').addClass('on');
            }else{
                $this.children('ul').children('li').eq(index).removeClass('on');
                $this.next('.tab-contents').removeClass('on');
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


